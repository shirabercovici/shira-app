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
              src="/Tic-Tac-Toe2.png"
              alt="Preview of the Tic-Tac-Toe game"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3>Tic-Tac-Toe</h3>
          <p>The classic game of X&apos;s and O&apos;s</p>
        </Link>
      </div>
    </main>
  );
}
