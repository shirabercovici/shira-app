import Link from "next/link";
import Image from "next/image";
import { APP_NAME, COURSE_GITHUB, DEMOS_ENABLED } from "../config";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header id="navbar">
      <h1>
        <Link href="/" className={styles.navLink}>
          <Image
            src="/icons/shira website icon.png"
            alt="Shira website icon"
            width={50}
            height={50}
            className={styles.navIcon}
          />
          {APP_NAME}
        </Link>
      </h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/tic-tac-toe">Tic-Tac-Toe</Link>
        <Link href="/art">Met Museum of Art</Link>
      </nav>
    </header>
  );
}
