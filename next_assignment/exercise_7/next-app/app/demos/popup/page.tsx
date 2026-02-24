"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./page.module.css";

const Popup = dynamic(() => import("../../components/Popup"), {
  ssr: false,
});

export default function PopupDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.header}>Dynamic Popup Demo</h1>

        <button
          className={styles.btn}
          onClick={() => setOpen(true)}
        >
          Open Popup
        </button>
      </div>

      {open && <Popup onClose={() => setOpen(false)} />}
    </div>
  );
}