"use client";

import Link from "next/link";
import Image from "next/image";
import "reactflow/dist/style.css";
import DSANode from "@/components/canvas/DSANode";
import styles from "./page.module.css";
import ReactFlow, { Background, Controls, ReactFlowProvider } from "reactflow";
import HandDrawnEdge from "@/components/canvas/HandDrawnEdge";
import {
  StraightEdge,
  CurveEdge,
  ZigzagEdge,
} from "@/components/canvas/MindmapEdges";
import { initialNodes, initialEdges } from "@/lib/mindmapData";
import Sidebar from "@/components/canvas/Sidebar";

const nodeTypes = {
  dsaNode: DSANode,
};
const edgeTypes = {
  handDrawn: HandDrawnEdge,
  straight: StraightEdge,
  curve: CurveEdge,
  zigzag: ZigzagEdge,
};

export default function TrainYourBrainPage() {
  return (
    <div className={styles.canvas}>
      {/* ── Fixed Back Button (top left) ── */}
      <Link href="/" className={styles.backButton}>
        ← Back to Home
      </Link>

      {/* ── Fixed Logo (top right) ── */}
      <div className={styles.logoWrap}>
        <Image
          src="/web_whitelogo_blackBC.svg"
          alt="TrainYourBrain"
          width={40}
          height={40}
          className={styles.logo}
        />
      </div>

      {/* ── Arrow marker definition (used by all edges) ── */}
      <svg
        style={{ position: "absolute", width: 0, height: 0 }}
        aria-hidden="true"
      >
        <defs>
          <marker
            id="tub-arrow"
            viewBox="0 0 12 12"
            refX="9"
            refY="6"
            markerWidth="13"
            markerHeight="13"
            markerUnits="userSpaceOnUse"
            orient="auto"
          >
            <path
              d="M3 3 L9 5 L3 20"
              fill="none"
              stroke="#3d4a4d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>
      </svg>

      <ReactFlowProvider>
        <Sidebar />

        {/* ── React Flow Canvas ── */}
        <div className={styles.flowWrap}>
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            fitView
            fitViewOptions={{
              nodes: [
                { id: "1" },
                { id: "2" },
                { id: "3" },
                { id: "4" },
                { id: "5" },
              ],
              padding: 1,
            }}
          >
            <Background
              variant="lines"
              color="rgba(0, 0, 0, 0.08)"
              gap={20}
              size={1}
            />
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
}
