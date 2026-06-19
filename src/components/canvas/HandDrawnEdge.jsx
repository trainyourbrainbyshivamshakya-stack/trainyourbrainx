"use client";

import { getBezierPath } from "reactflow";

export default function HandDrawnEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="hand-drawn-edge">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.01"
              numOctaves="6"
              result="noise"
              seed="10"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <marker
            id={`arrow-${id}`}
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path
              d="M0,0 L0,6 L9,3 z"
              fill="#2d3f45"
              filter="url(#hand-drawn-edge)"
            />
          </marker>
        </defs>
      </svg>

      <path
        d={edgePath}
        fill="none"
        stroke="#2d3f45"
        strokeWidth={2}
        strokeLinecap="round"
        markerEnd={`url(#arrow-${id})`}
        filter="url(#hand-drawn-edge)"
        style={{ opacity: 0.8 }}
      />
    </>
  );
}
