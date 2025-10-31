"use client";

import styles from "./Wholesales_button.module.css";

export default function WholesalesButton({ onClick }) {
  return (
    <button className={styles.WholesalesButton} onClick={onClick}>
      Wholesales Applications
    </button>
  );
}
