import Link from "next/link";
import styles from "./DesignNavbar.module.css";

export default function DesignNavbar() {
  return (
    <header className={styles.header}>
      <Link href="/design" className={styles.logo}>
        DuoGami
      </Link>
    </header>
  );
}
