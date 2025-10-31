"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function AppNavbar({ onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleShopClick = () => {
    setMenuOpen(false);

    // If already on homepage, just scroll
    if (pathname === "/") {
      const section = document.getElementById("shop");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage with a hash
      router.push("/#shop");
    }
  };

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

      {/* Hamburger toggle (for mobile) */}
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
        <div onClick={handleShopClick} className={styles.LeftLinks}>
          SHOP !
        </div>
        <Link href="/contact?form=contact" className={styles.LeftLinks}>
          Contact
        </Link>
        <Link href="/About" className={styles.LeftLinks}>
          About
        </Link>
      </div>

      {/* Cart */}
      <div className={styles.NavIcons}>
        <button className={styles.NavIcon} onClick={onCartClick}>
          🛒
        </button>
      </div>
    </nav>
  );
}
