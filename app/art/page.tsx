// 'use client'; // This component fetches data, so it's a Client Component

// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import styles from './page.module.css';


// // --- Type Definitions ---
// // Define the structure of the art object we expect from the API
// interface ArtObject {
//   objectID: number;
//   title: string;
//   artistDisplayName: string;
//   primaryImageSmall: string;
//   objectDate: string;
//   medium: string;
//   culture: string;
// }

// // Define the structure of the data our fetching function will return
// interface ArtDataResponse {
//   departmentTitle: string;
//   artObjects: ArtObject[];
// }

// // --- Data Fetching Function ---
// /*Fetches a random selection of art objects from a specific department.*/
// async function getArtData(departmentId: string, count: number): Promise<ArtDataResponse> {
//   const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';

//   // handle HTTP errors with try/catch
//   try {
//     // Get the department's name
//     const deptRes = await fetch(`${BASE_URL}/departments`);
//     if (!deptRes.ok) throw new Error('Failed to fetch department list');
//     const deptsData = await deptRes.json();
//     const department = deptsData.departments.find(
//       (dept: any) => dept.departmentId.toString() === departmentId
//     );
//     const departmentTitle = department ? department.displayName : 'Unknown Department';

//     // Get all object IDs for that department
//     const objectsRes = await fetch(`${BASE_URL}/objects?departmentIds=${departmentId}`);
//     if (!objectsRes.ok) throw new Error(`Failed to fetch objects for department ${departmentId}`);
//     const objectsData = await objectsRes.json();
    
//     const allObjectIDs = objectsData.objectIDs;
//     if (!allObjectIDs || allObjectIDs.length === 0) {
//       // Handle department with no objects
//       return { departmentTitle, artObjects: [] };
//     }

//     // Shuffle all IDs to get a random order
//     const shuffledIDs = allObjectIDs.sort(() => 0.5 - Math.random());

//     const artObjects: ArtObject[] = [];
//     let currentIndex = 0;

//     // Keep fetching until we have enough art with images or run out of IDs
//     while (artObjects.length < count && currentIndex < shuffledIDs.length) {
//       const id = shuffledIDs[currentIndex];
//       currentIndex++;

//       try {
//         const objectRes = await fetch(`${BASE_URL}/objects/${id}`);
//         if (!objectRes.ok) {
//           console.warn(`Skipping object ${id}: Failed to fetch details.`);
//           continue; // Skip to the next object if this one fails
//         }
//         const objectData: ArtObject = await objectRes.json();

//         // Only add the object if it has an image
//         if (objectData.primaryImageSmall) {
//           artObjects.push(objectData);
//         }
//       } catch (e) {
//         console.warn(`Skipping object ${id} due to an error:`, e);
//       }
//     }

//     // Return the structured data
//     return { departmentTitle, artObjects };

//   } catch (error) {
//     console.error('Error in getArtData:', error);
//     throw error;
//   }
// }

// // --- ArtItem Component ---
// // This component renders a single piece of art
// interface ArtItemProps {
//   item: ArtObject;
// }

// const ArtItem: React.FC<ArtItemProps> = ({ item }) => {
//   return (
//     <div className={styles.card}>
//       {item.primaryImageSmall ? (
//         <img
//           src={item.primaryImageSmall}
//           alt={item.title}
//           className={styles.cardImage}
//         />
//       ) : (
//         <div className={styles.imagePlaceholder}>No Image Available</div>
//       )}
//       <div className={styles.cardContent}>
//         {/* Required properties: title, artistDisplayName, image */}
//         <h3>{item.title || 'Untitled'}</h3>
//         <p><strong>Artist:</strong> {item.artistDisplayName || 'Unknown Artist'}</p>
        
//         {/* At least 3 other properties */}
//         <p><strong>Date:</strong> {item.objectDate || 'Unknown'}</p>
//         <p><strong>Medium:</strong> {item.medium || 'Unknown'}</p>
//         <p><strong>Culture:</strong> {item.culture || 'Unknown'}</p>
//       </div>
//     </div>
//   );
// };


// // --- Main Page Component ---
// export default function ArtPage() {
//   // State for holding our data, loading status, and errors
//   const [data, setData] = useState<ArtDataResponse | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // --- Configuration ---
//   // We'll hardcode a department and count for this example.
//   // ID 11 = "European Paintings"
//   const DEPARTMENT_ID = '11'; 
//   const ART_COUNT = 6; // Number of art pieces to fetch

//   // Fetch data on component mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const artData = await getArtData(DEPARTMENT_ID, ART_COUNT);
//         setData(artData);
//       } catch (err: any) {
//         // Handle HTTP errors
//         setError(`Failed to fetch art: ${err.message}. Please try again later.`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array runs this effect only once

//   // --- Render Logic ---
//   const renderContent = () => {
//     // Loading state
//     if (loading) {
//       return <p>Loading art from the museum...</p>;
//     }

//     // Error state (Requirement #4)
//     if (error) {
//       return <p className={styles.error}>{error}</p>;
//     }

//     // Success state
//     if (data) {
//       return (
//         <>
//           {/* Display Department Title (Requirement #5) */}
//           <h2>{data.departmentTitle}</h2>
          
//           {data.artObjects.length === 0 ? (
//             <p>No art found for this department.</p>
//           ) : (
//             <div className={styles.grid}>
//               {/* Render a component for each item (Requirement #6) */}
//               {data.artObjects.map((item) => (
//                 <ArtItem key={item.objectID} item={item} />
//               ))}
//             </div>
//           )}
//         </>
//       );
//     }

//     return null; // Should not be reached
//   };

//   return (
//     <>
//       <Head>
//         <title>Art from the Met</title>
//       </Head>
//       <main className={styles.container}>
//         <h1>Art from the Met Museum</h1>
//         {renderContent()}
//       </main>
//     </>
//   );
// }

// app/art/page.tsx
// NO 'use client' - This is now a Server Component!
import Head from 'next/head';
import styles from './page.module.css';

// --- Type Definitions (same as before) ---
interface ArtObject {
  objectID: number;
  title: string;
  artistDisplayName: string;
  primaryImageSmall: string;
  objectDate: string;
  medium: string;
  culture: string;
  objectURL: string;
}

interface ArtDataResponse {
  departmentTitle: string;
  artObjects: ArtObject[];
}

// --- Data Fetching Function (Modified) ---
/**
 * Fetches a random selection of art objects from a specific department.
 * This function now runs on the SERVER.
 */
async function getArtData(departmentId: string, count: number): Promise<ArtDataResponse> {
  const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';
  
  // This 'revalidate' option is the magic of ISR (Incremental Static Regeneration)
  // It tells Next.js to cache the results for 1 hour (3600 seconds)
  const fetchOptions = {
    next: { revalidate: 3600 } 
  };

  // We wrap in a try/catch to handle errors during the server fetch
  try {
    // 1. Get the department's name
    const deptRes = await fetch(`${BASE_URL}/departments`, fetchOptions);
    if (!deptRes.ok) throw new Error('Failed to fetch department list');
    const deptsData = await deptRes.json();
    const department = deptsData.departments.find(
      (dept: any) => dept.departmentId.toString() === departmentId
    );
    const departmentTitle = department ? department.displayName : 'Unknown Department';

    // 2. Get all object IDs for that department
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

    // 3. Get random objects
    const shuffledIDs = allObjectIDs.sort(() => 0.5 - Math.random());
    const selectedIDs = shuffledIDs.slice(0, Math.min(count, allObjectIDs.length)); 

    // 4. Fetch details for each selected ID
    const objectPromises = selectedIDs.map((id: number) =>
      fetch(`${BASE_URL}/objects/${id}`, fetchOptions).then(res => {
        if (!res.ok) throw new Error(`Failed to fetch details for object ${id}`);
        return res.json();
      })
    );

    const artObjects = await Promise.all(objectPromises);

    // 5. Return the structured data
    return { departmentTitle, artObjects };

  } catch (error) {
    console.error('Error in getArtData:', error);
    // When an error is thrown in a Server Component fetch,
    // Next.js will catch it and can render an error.js file.
    // For now, we'll re-throw it.
    throw error;
  }
}

// --- ArtItem Component (Same as before) ---
// This can stay in the same file or be moved to its own file.
// It receives props, so it's compatible with Server Components.
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
      className={styles.cardLink} // We use this to remove link default styles
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
// We make the function 'async'
export default async function ArtPage() {
  // --- Configuration ---
  const DEPARTMENT_ID = '11'; // "European Paintings"
  const ART_COUNT = 6;

  // We can use a try/catch block to handle errors gracefully
  let data: ArtDataResponse | null = null;
  let fetchError: string | null = null;

  try {
    // 1. We fetch data RIGHT HERE, before the return.
    // No useEffect, No useState, No loading state!
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
          // 1. Error state
          <p className={styles.error}>{fetchError}</p>
        ) : data ? (
          // 2. Success state
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
          // This case should ideally not be hit if error handling is correct
          <p>Something went wrong.</p>
        )}
      </main>
    </>
  );
}