"use client";

import { useState, useCallback, useMemo } from "react";
import styles from "./Sidebar.module.css";
import { initialNodes } from "@/lib/mindmapData";
import { useReactFlow, useOnViewportChange, useStore } from "reactflow";

const titleNodes = initialNodes.filter(
  (n) => n.type === "dsaNode" && n.data.label,
);

export default function Sidebar() {
  const { setCenter, getZoom } = useReactFlow();
  const [activeId, setActiveId] = useState(titleNodes[0]?.id);

  const width = useStore((s) => s.width);
  const height = useStore((s) => s.height);

  const centers = useMemo(
    () =>
      titleNodes.map((n) => ({
        id: n.id,
        x: n.position.x + (n.data.width || 140) / 2,
        y: n.position.y + 40,
      })),
    [],
  );

  const updateActive = useCallback(
    (viewport) => {
      const { x, y, zoom } = viewport;
      // Screen-center point converted to flow coordinates
      const screenCx = width / 2;
      const screenCy = height / 2;
      const flowCx = (screenCx - x) / zoom;
      const flowCy = (screenCy - y) / zoom;

      let closest = centers[0];
      let bestDist = Infinity;
      for (const c of centers) {
        const d = (c.x - flowCx) ** 2 + (c.y - flowCy) ** 2;
        if (d < bestDist) {
          bestDist = d;
          closest = c;
        }
      }
      if (closest) setActiveId(closest.id);
    },
    [centers, width, height],
  );

  useOnViewportChange({ onChange: updateActive });

  const goToNode = (node) => {
    const x = node.position.x + (node.data.width || 140) / 2;
    const y = node.position.y + 40;
    setCenter(x, y, { zoom: getZoom(), duration: 600 });
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>DSA MINDMAP</div>
        <div className={styles.headerTagline}>
          The full picture — every structure, every pattern.
        </div>
      </div>

      <ul className={styles.list}>
        {titleNodes.map((node) => (
          <li
            key={node.id}
            className={`${styles.item} ${
              node.id === activeId ? styles.active : ""
            }`}
            onClick={() => goToNode(node)}
          >
            {node.data.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}
