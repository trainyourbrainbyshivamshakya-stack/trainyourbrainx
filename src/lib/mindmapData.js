export const initialNodes = [
  // ===================== RAM SECTION (unchanged) =====================

 
  {
    id: "1",
    type: "dsaNode",
    position: { x: 88, y: 0 },
    data: {
      label: "RAM",
      color: "#3c4848",
      textColor: "#f8f9ff",
      points: [],
    },
  },
  {
    id: "2",
    type: "dsaNode",
    position: { x: 0, y: 120 },
    data: {
      width: 320,
      color: "#ccc0b4",
      textColor: "#2d3f45",
      blocks: [
        {
          type: "text",
          text: "RAM is just a long strip of memory cells (a long row of billions of tiny boxes sitting side by side), where each memory cell can hold exactly 1 byte (8 bits) of data.",
        },
        { type: "memoryCells", count: 4 },
        {
          type: "text",
          text: "Each memory cell has a unique address in hexadecimal format (0x7ff0ac8d), and RAM has a superpower: it can access or jump to any memory cell among billions in constant time, O(1), if it knows the exact hexadecimal address.",
        },
        {
          type: "text",
          text: "And it's not magic—it's pure hardware engineering. RAM is physically wired in such a way that it can directly access any memory cell in constant size using its address.",
        },
      ],
    },
  },
  {
    id: "3",
    type: "dsaNode",
    position: { x: 50, y: 530 },
    data: {
      label: "How Data Sits in RAM",
      width: 220,
      color: "#3c4848",
      textColor: "#f8f9ff",
      points: [],
    },
  },
  {
    id: "4",
    type: "dsaNode",
    position: { x: 10, y: 680 },
    data: {
      width: 300,
      color: "#c0cccc",
      textColor: "#2d3f45",
      blocks: [
        {
          type: "para",
          text: "Data is stored in RAM using variables and data types. A Data Type tells the computer exactly how many adjacent memory cells (bytes) to reserve in RAM (e.g., 1 byte for char, 4 bytes for int). A Variable is just a human-friendly label that points to the exact hexadecimal address of the first reserved cell.",
        },
        { type: "code", text: "int age = 25;" },
        {
          type: "note",
          text: '(Reserves 4 continuous bytes, labels the first byte "age", and stores 25 in binary.)',
        },
      ],
    },
  },

  // ===================== ARRAY SECTION (zigzag spread) =====================
  // Pattern: header sits center-ish, its content branches to ONE side,
  // next header pulls back toward center/other side, so the whole
  // chain sways left-right down the canvas instead of falling straight.

  // ---- HEADER 1: How Array Was Born (pulls RIGHT) ----
  {
    id: "5",
    type: "dsaNode",
    position: { x: 380, y: 1030 },
    data: {
      label: "How Array Was Born",
      width: 240,
      color: "#3c4848",
      textColor: "#f8f9ff",
      points: [],
    },
  },

  // ---- CONTENT 1: Birth Story (branches further RIGHT) ----
  {
    id: "6",
    type: "dsaNode",
    position: { x: 330, y: 1160 },
    data: {
      width: 340,
      color: "#ccc0b4",
      textColor: "#2d3f45",
      blocks: [
        {
          type: "text",
          text: "Scientists needed to do heavy calculations fast, so they used computers. Math already had a concept: Vector — a group of similar data sitting together.",
        },
        {
          type: "text",
          text: "Problem: a normal Variable lands at a random RAM address every time. But Vector needed data sitting side-by-side, continuous.",
        },
        {
          type: "note",
          text: "Need (Vector) + Opportunity (RAM's contiguous cells) = Array",
        },
      ],
    },
  },

  // ---- HEADER 2: Symbol & Base Address (swings back toward LEFT) ----
  {
    id: "7",
    type: "dsaNode",
    position: { x: 100, y: 1430 },
    data: {
      label: "Symbol & Base Address",
      width: 240,
      color: "#3c4848",
      textColor: "#f8f9ff",
      points: [],
    },
  },

  // ---- CONTENT 2: Symbol & Base Address (branches further LEFT) ----
  {
    id: "8",
    type: "dsaNode",
    position: { x: 70, y: 1570 },
    data: {
      width: 300,
      color: "#c0cccc",
      textColor: "#2d3f45",
      blocks: [
        { type: "code", text: "int arr[10];" },
        {
          type: "text",
          text: "[ ] tells the compiler how many continuous values to reserve. The array name is just a label — pointing to the first memory cell.",
        },
        {
          type: "note",
          text: "This first cell's address = Base Address",
        },
      ],
    },
  },

  // ---- HEADER 3: Indexing = Offset (swings back toward RIGHT) ----
  {
    id: "9",
    type: "dsaNode",
    position: { x: 460, y: 1820 },
    data: {
      label: "Indexing = Offset",
      width: 240,
      color: "#3c4848",
      textColor: "#f8f9ff",
      points: [],
    },
  },

  // ---- CONTENT 3: Indexing & Formula (branches further RIGHT) ----
  {
    id: "10",
    type: "dsaNode",
    position: { x: 420, y: 1930 },
    data: {
      width: 320,
      color: "#ccc0b4",
      textColor: "#2d3f45",
      blocks: [
        {
          type: "text",
          text: "Index = steps needed from the start to reach a value. First value needs 0 steps — so indexing starts at 0.",
        },
        {
          type: "code",
          text: "Address = base_address + (Index × Size of Type)",
        },
        {
          type: "note",
          text: "This formula gives O(1) access to ANY element.",
        },
      ],
    },
  },

  // ---- HEADER 4: Array IS RAM (swings back toward LEFT/center) ----
  {
    id: "11",
    type: "dsaNode",
    position: { x: 470, y: 2200 },
    data: {
      label: "Array IS RAM",
      width: 220,
      color: "#3c4848",
      textColor: "#f8f9ff",
      points: [],
    },
  },

  // ---- CONTENT 4: Array is RAM (branches LEFT) ----
  {
    id: "12",
    type: "dsaNode",
    position: { x: 430, y: 2320 },
    data: {
      width: 300,
      color: "#c0cccc",
      textColor: "#2d3f45",
      blocks: [
        {
          type: "text",
          text: "RAM = a long, unbounded row of continuous memory cells.",
        },
        {
          type: "text",
          text: "Array = the same thing, just bounded to a fixed size.",
        },
        {
          type: "note",
          text: "Array isn't a separate structure — it's a bounded slice of RAM.",
        },
      ],
    },
  },

  // ---- HEADER 5: Nature & Trade-off (swings back toward RIGHT) ----
  {
    id: "13",
    type: "dsaNode",
    position: { x: 460, y: 2610 },
    data: {
      label: "Nature & Trade-off",
      width: 240,
      color: "#3c4848",
      textColor: "#f8f9ff",
      points: [],
    },
  },

  // ---- CONTENT 5: Nature + Trade-off (branches RIGHT) ----
  {
    id: "14",
    type: "dsaNode",
    position: { x: 420, y: 2730 },
    data: {
      width: 320,
      color: "#ccc0b4",
      textColor: "#2d3f45",
      blocks: [
        {
          type: "text",
          text: "Nature: elements sit adjacent, continuous, side-by-side.",
        },
        {
          type: "text",
          text: "Superpower: constant-time access to any element, anywhere.",
        },
        {
          type: "text",
          text: "Weakness: same continuous, fixed-size nature makes insertion/resizing costly — shifting or full copy needed.",
        },
      ],
    },
  },
];

export const initialEdges = [
  { id: "e1-2", source: "1", target: "2", type: "zigzag" },
  { id: "e2-3", source: "2", target: "3", type: "straight" },
  { id: "e3-4", source: "3", target: "4", type: "zigzag" },
  { id: "e4-5", source: "4", target: "5", type: "curve",  targetHandle: "left-target" },
  { id: "e5-6", source: "5", target: "6", type: "zigzag" },
  { id: "e6-7", source: "6", target: "7", type: "curve" },
  { id: "e7-8", source: "7", target: "8", type: "zigzag" },
  { id: "e8-9", source: "8", target: "9", type: "curve" ,targetHandle:"left-target" },
  { id: "e9-10", source: "9", target: "10", type: "zigzag" },
  { id: "e10-11", source: "10", target: "11", type: "straight" },
  { id: "e11-12", source: "11", target: "12", type: "zigzag" },
  { id: "e12-13", source: "12", target: "13", type: "straight" },
  { id: "e13-14", source: "13", target: "14", type: "zigzag" },
];