'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.css';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu on window resize if it's open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/icons/shira website icon.png"
            alt="Shira's App icon"
            width={40}
            height={40}
            className={styles.logoIcon}
          />
          Shira&apos;s App
        </Link>

        {/* Hamburger Menu Button - only visible on mobile */}
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`} onClick={closeMenu}>
          <ul>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/art">
                Art Gallery
              </Link>
            </li>
            <li>
              <Link href="/tic-tac-toe">
                Tic-Tac-Toe
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
