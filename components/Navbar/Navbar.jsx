"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function AppNavbar({onCartClick}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.NavbarContainer}>
      {/* Logo */}
      <div className={styles.NavbarLogo}>
        <Link href="/">
          <Image
            src="/images/Logo.png"
            alt="Lulu Remi Logo"
            width={100}
            height={100}
            priority
          />
        </Link>
      </div>

      {/* Hamburger toggle (only shows on small screens) */}
      <button
        className={styles.Hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Links */}
      <div
        className={`${styles.NavLinksContainer} ${
          menuOpen ? styles.ShowMenu : ""
        }`}
      >
        <Link href="/Contact" className={styles.LeftLinks}>
          Contact
        </Link>
        <Link href="/About" className={styles.LeftLinks}>
          About
        </Link>
      </div>

      {/* Cart */}
      <div className={styles.NavIcons}>
        <button href="/cart" className={styles.NavIcon} onClick={onCartClick}>
          🛒
        </button>
      </div>
    </nav>
  );
}