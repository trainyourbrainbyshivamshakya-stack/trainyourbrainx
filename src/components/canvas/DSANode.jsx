"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { Handle, Position } from "reactflow";
import styles from "./DSANode.module.css";
import { generateWavePath, stringToSeed } from "../../lib/wavePath";
import MemoryCells from "./diagrams/MemoryCells";

export default function DSANode({ id, data }) {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      setSize({ width: el.offsetWidth, height: el.offsetHeight });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const path = useMemo(() => {
    if (size.width < 2 || size.height < 2) return "";
    return generateWavePath(size.width, size.height, {
      seed: stringToSeed(id || data.label || "node"),
    });
  }, [size.width, size.height, id, data.label]);

  const fill = data.color || "#f8f9ff";

  return (
    <div
      ref={ref}
      className={styles.node}
      style={{
        color: data.textColor || "#2d3f45",
        width: data.width ? `${data.width}px` : undefined,
      }}
    >
      {path && (
        <svg
          className={styles.bg}
          width={size.width}
          height={size.height}
          viewBox={`0 0 ${size.width} ${size.height}`}
          preserveAspectRatio="none"
        >
          <path d={path} fill={fill} />
        </svg>
      )}

      <Handle
        type="target"
        position={Position.Top}
        id="top-target"
        className={styles.handle}
      />

      <Handle
        type="target"
        position={Position.Top}
        id="top-source"
        className={styles.handle}
      />

      {data.label && <div className={styles.title}>{data.label}</div>}

      {data.blocks && data.blocks.length > 0 && (
        <div className={styles.content}>
          {data.blocks.map((block, i) => {
            switch (block.type) {
              case "memoryCells":
                return <MemoryCells key={i} count={block.count} />;
              case "para":
                return (
                  <p key={i} className={styles.para}>
                    {block.text}
                  </p>
                );
              case "code":
                return (
                  <div key={i} className={styles.code}>
                    {block.text}
                  </div>
                );
              case "note":
                return (
                  <div key={i} className={styles.note}>
                    {block.text}
                  </div>
                );
              case "list":
                return (
                  <ol key={i} className={styles.list}>
                    {block.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ol>
                );
              default:
                return (
                  <div key={i} className={styles.point}>
                    {block.label && (
                      <span className={styles.pointLabel}>{block.label}: </span>
                    )}
                    <span>{block.text}</span>
                  </div>
                );
            }
          })}
        </div>
      )}

      {data.points && data.points.length > 0 && (
        <ul className={styles.points}>
          {data.points.map((point, index) => (
            <li key={index} className={styles.point}>
              <span className={styles.pointLabel}>{point.label} </span>
              <span>{point.text}</span>
            </li>
          ))}
        </ul>
      )}

      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom-target"
        className={styles.handle}
      />

      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom-source"
        className={styles.handle}
      />

      <Handle
        type="source"
        position={Position.Right}
        id="right-source"
        className={styles.handle}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right-target"
        className={styles.handle}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="left-source"
        className={styles.handle}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left-target"
        className={styles.handle}
      />
    </div>
  );
}
