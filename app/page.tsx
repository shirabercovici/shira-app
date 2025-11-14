import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h2>Welcome to Shira&apos;s App!</h2>
        <p>Here are some projects you can check out:</p>
      </div>

      <div className={styles.grid}>
        <Link href="/tic-tac-toe" className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              src="/Tic-Tac-Toe.png"
              alt="Preview of the Tic-Tac-Toe game"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3>Tic-Tac-Toe</h3>
          <p>The classic game of X&apos;s and O&apos;s</p>
        </Link>
        <Link href="/art" className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              src="/Met Museum of Art .jpeg"
              alt="Preview of the Met Museum of Art page"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3>Met Museum of Art</h3>
          <p>Art from the Met Museum of Art</p>
        </Link>
        <Link href="/design" className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              src="/DuoGami.png"
              alt="Preview of the DuoGami app"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3>DuoGami</h3>
          <p>Create your own origami</p>
        </Link>
      </div>
    </main>
  );
}
