"use client";

import { useMemo } from "react";
import styles from "./MemoryCells.module.css";

function randByte() {
  let s = "";
  for (let i = 0; i < 8; i++) s += Math.random() < 0.5 ? "0" : "1";
  return s;
}

export default function MemoryCells({ count = 4 }) {
  const bytes = useMemo(
    () => Array.from({ length: count }, () => randByte()),
    [count],
  );

  return (
    <div className={styles.row}>
      {bytes.map((b, i) => (
        <div key={i} className={styles.cell}>
          {b}
        </div>
      ))}
      <span className={styles.dots}>…</span>
    </div>
  );
}
