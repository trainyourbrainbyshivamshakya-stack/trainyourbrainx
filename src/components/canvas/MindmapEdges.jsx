"use client";

import {
  straightPath,
  curvePath,
  zigzagPath,
  stringToSeed,
} from "../../lib/edgePaths";

const STROKE = "#3d4a4d";

function EdgePath({ d }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={STROKE}
      strokeWidth={2.5}
      strokeLinecap="round"
      markerEnd="url(#tub-arrow)"
    />
  );
}

export function StraightEdge({ sourceX, sourceY, targetX, targetY }) {
  return <EdgePath d={straightPath(sourceX, sourceY, targetX, targetY)} />;
}

export function CurveEdge({ sourceX, sourceY, targetX, targetY }) {
  return <EdgePath d={curvePath(sourceX, sourceY, targetX, targetY)} />;
}

export function ZigzagEdge({ id, sourceX, sourceY, targetX, targetY }) {
  return (
    <EdgePath
      d={zigzagPath(sourceX, sourceY, targetX, targetY, {
        seed: stringToSeed(id),
      })}
    />
  );
}
