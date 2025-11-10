import Head from 'next/head';
import styles from './page.module.css';

// --- Type Definitions ---
interface ArtObject {
  objectID: number;
  title: string;
  artistDisplayName: string;
  primaryImageSmall: string;
  primaryImage: string; // This is the large image
  objectDate: string;
  medium: string;
  culture: string; // This will be used
  objectURL: string;
}

interface ArtDataResponse {
  departmentTitle: string;
  artObjects: ArtObject[];
}

// --- Data Fetching Function ---
/*Fetches a random selection of art objects from a specific department.*/
async function getArtData(departmentId: string, count: number): Promise<ArtDataResponse> {
  const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';
  
  // 'revalidate' tells Next.js to cache the results for 1 hour (3600 seconds)
  const fetchOptions = {
    next: { revalidate: 3600 }
  };

  // Wrap in a try/catch to handle errors during the server fetch
  try {
    // Get the department's name
    const deptRes = await fetch(`${BASE_URL}/departments`, fetchOptions);
    if (!deptRes.ok) throw new Error('Failed to fetch department list');
    const deptsData = await deptRes.json();
    const department = deptsData.departments.find(
      (dept: any) => dept.departmentId.toString() === departmentId
    );
    const departmentTitle = department ? department.displayName : 'Unknown Department';

    // Get all object IDs for that department
    const objectsRes = await fetch(
      `${BASE_URL}/objects?departmentIds=${departmentId}`, 
      fetchOptions
    );
    if (!objectsRes.ok) throw new Error(`Failed to fetch objects for department ${departmentId}`);
    const objectsData = await objectsRes.json();
    
    const allObjectIDs = objectsData.objectIDs;
    if (!allObjectIDs || allObjectIDs.length === 0) {
      return { departmentTitle, artObjects: [] };
    }

    // Shuffle all IDs to get a random order
    const shuffledIDs = allObjectIDs.sort(() => 0.5 - Math.random());
    
    const artObjects: ArtObject[] = [];
    let currentIndex = 0;

    // Keep fetching until we have enough art with images or run out of IDs
    while (artObjects.length < count && currentIndex < shuffledIDs.length) {
      const id = shuffledIDs[currentIndex];
      currentIndex++;

      try {
        const objectRes = await fetch(`${BASE_URL}/objects/${id}`, fetchOptions);
        if (!objectRes.ok) {
          // Silently skip if an object fails to fetch
          continue;
        }
        const objectData: ArtObject = await objectRes.json();

        // Only add the object if it has a primary image
        if (objectData.primaryImageSmall) {
          artObjects.push(objectData);
        }
      } catch (e) {
        // Silently skip on error
      }
    }

    // Return the structured data
    return { departmentTitle, artObjects };

  } catch (error) {
    console.error('Error in getArtData:', error);
    throw error;
  }
}

// --- ArtItem Component ---
interface ArtItemProps {
  item: ArtObject;
}

const ArtItem: React.FC<ArtItemProps> = ({ item }) => {
  return (
    // Wrap the card in an <a> tag
    <a 
      href={item.objectURL} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.cardLink} // Remove link default styles
    >
      <div className={styles.card}>
        {item.primaryImageSmall ? (
          <img
            src={item.primaryImageSmall}
            alt={item.title}
            className={styles.cardImage}
          />
        ) : (
          <div className={styles.imagePlaceholder}>No Image Available</div>
        )}
        <div className={styles.cardContent}>
          <h3>{item.title || 'Untitled'}</h3>
          <p><strong>Artist:</strong> {item.artistDisplayName || 'Unknown Artist'}</p>
          <p><strong>Date:</strong> {item.objectDate || 'Unknown'}</p>
          <p><strong>Medium:</strong> {item.medium || 'Unknown'}</p>
          <p><strong>Culture:</strong> {item.culture || 'Unknown'}</p>
        </div>
      </div>
    </a>
  );
};


// --- Main Page Component ---
export default async function ArtPage() {
  // --- Configuration ---
  const DEPARTMENT_ID = '11'; // "European Paintings"
  const ART_COUNT = 6;

  let data: ArtDataResponse | null = null;
  let fetchError: string | null = null;

  try {
    data = await getArtData(DEPARTMENT_ID, ART_COUNT);
  } catch (err: any) {
    fetchError = `Failed to fetch art: ${err.message}. Please try again later.`;
  }

  // --- Render Logic ---
  // The component now renders one of two states: success or error.
  // There is no 'loading' state because the page won't be sent
  // to the user until the data is ready.
  return (
    <>
      <Head>
        <title>Art from the Met</title>
      </Head>
      <main className={styles.container}>
        <h1>Art from the Met Museum</h1>

        {fetchError ? (
          // Error state
          <p className={styles.error}>{fetchError}</p>
        ) : data ? (
          // Success state
          <>
            <h2>{data.departmentTitle}</h2>
            {data.artObjects.length === 0 ? (
              <p>No art found for this department.</p>
            ) : (
              <div className={styles.grid}>
                {data.artObjects.map((item) => (
                  <ArtItem key={item.objectID} item={item} />
                ))}
              </div>
            )}
          </>
        ) : (
          <p>Something went wrong.</p>
        )}
      </main>
    </>
  );
}