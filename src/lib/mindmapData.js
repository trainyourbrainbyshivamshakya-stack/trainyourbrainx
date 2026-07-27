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
    {
    id: "15",
    type: "dsaNode",
    position: { x: 860, y: 3100 },
    data: {
      width: 280,
      color: "#ccc0b4",
      textColor: "#2d3f45",
      blocks: [
        {
          type: "text",
          text: "Weakness 2: Mid-Insertion Cost — inserting in the middle means shifting every element after it. O(n) just to make space.",
        },
        {
          type: "note",
          text: "Root cause: contiguous memory layout itself.",
        },
      ],
    },
  },
 
  // ---- LEFT BRANCH: Mid-Insertion weakness (continues to Linked List) ----
  {
    id: "16",
    type: "dsaNode",
    position: { x: 0, y: 3100 },
    data: {
      width: 300,
      color: "#ccc0b4",
      textColor: "#2d3f45",
      
      blocks: [
        {
          type: "text",
          text: "Weakness 1: Fixed Size — once declared, the array can't grow. Need a bigger block? Copy everything into a new array.",
        },
        {
          type: "note",
          text: "(Solved later by Dynamic Array — coming soon)",
        },
      ],
    },
  },
 
  // ---- HEADER: How Linked List Was Born (continues left branch) ----
  {
    id: "17",
    type: "dsaNode",
    position: { x: 1300, y: 3300 },
    data: {
      label: "If Not Contiguous, Then What?",
      width: 260,
      color: "#3c4848",
      textColor: "#f8f9ff",
      points: [],
    },
  },
 
  // ---- CONTENT: The Observation ----
  {
    id: "18",
    type: "dsaNode",
    position: { x: -380, y: 3300 },
    data: {
      width: 320,
      color: "#c0cccc",
      textColor: "#2d3f45",
      blocks: [
        {
          type: "text",
          text: "Root cause of both array problems = contiguous memory. So: drop that constraint. Let values sit anywhere in RAM.",
        },
        {
          type: "text",
          text: "New problem: if values are scattered, how do we know where the next one is?",
        },
        {
          type: "note",
          text: "Idea: each value carries the address of the next one.",
        },
      ],
    },
  },
 
  // ---- HEADER: Pointer ----
  {
    id: "19",
    type: "dsaNode",
    position: { x: -160, y: 3550 },
    data: {
      label: "Pointer — From Scratch",
      width: 240,
      color: "#3c4848",
      textColor: "#f8f9ff",
      points: [],
    },
  },
 
  // ---- CONTENT: Pointer explained ----
  {
    id: "20",
    type: "dsaNode",
    position: { x: -380, y: 3700 },
    data: {
      width: 320,
      color: "#c0cccc",
      textColor: "#2d3f45",
      blocks: [
        {
          type: "text",
          text: "A Pointer is a variable that doesn't hold a value — it holds the RAM address of another variable.",
        },
        { type: "code", text: "int* ptr = &age;" },
        {
          type: "text",
          text: "ptr stores age's address. *ptr jumps to that address and reads the value there (dereferencing).",
        },
        {
          type: "note",
          text: "This is exactly what's needed to store 'next' element's location.",
        },
      ],
    },
  },
 
  // ---- HEADER: Node ----
  {
    id: "21",
    type: "dsaNode",
    position: { x: -160, y: 3950 },
    data: {
      label: "Node — Data + Next",
      width: 240,
      color: "#3c4848",
      textColor: "#f8f9ff",
      points: [],
    },
  },
 
  // ---- CONTENT: Node thinking ----
  {
    id: "22",
    type: "dsaNode",
    position: { x: -380, y: 4100 },
    data: {
      width: 320,
      color: "#c0cccc",
      textColor: "#2d3f45",
      blocks: [
        {
          type: "text",
          text: "No existing type (int, char, float) can hold a value AND a pointer together. So a new unit is needed: the Node.",
        },
        {
          type: "text",
          text: "A Node = data field + a pointer field pointing to the next Node.",
        },
        {
          type: "note",
          text: "This combination didn't exist before — it had to be built.",
        },
      ],
    },
  },
 
  // ---- HEADER: Struct ----
  {
    id: "23",
    type: "dsaNode",
    position: { x: -160, y: 4350 },
    data: {
      label: "Struct — Building Node",
      width: 260,
      color: "#3c4848",
      textColor: "#f8f9ff",
      points: [],
    },
  },
 
  // ---- CONTENT: Struct + self-referential ----
  {
    id: "24",
    type: "dsaNode",
    position: { x: -380, y: 4500 },
    data: {
      width: 340,
      color: "#c0cccc",
      textColor: "#2d3f45",
      blocks: [
        {
          type: "text",
          text: "Struct = a tool to define your own custom type by grouping fields together.",
        },
        {
          type: "code",
          text: "struct Node {\n  int data;\n  Node* next;\n};",
        },
        {
          type: "text",
          text: "next is a pointer of type Node — pointing to another Node. This is self-referential, not circular: a pointer's size is fixed regardless of what it points to.",
        },
      ],
    },
  },
 
  // ---- HEADER: Full Structure ----
  {
    id: "25",
    type: "dsaNode",
    position: { x: -160, y: 4750 },
    data: {
      label: "Full Structure: Head, Tail, Null",
      width: 280,
      color: "#3c4848",
      textColor: "#f8f9ff",
      points: [],
    },
  },
 
  // ---- CONTENT: Visual structure ----
  {
    id: "26",
    type: "dsaNode",
    position: { x: -380, y: 4900 },
    data: {
      width: 340,
      color: "#c0cccc",
      textColor: "#2d3f45",
      blocks: [
        {
          type: "text",
          text: "Head = pointer to the first Node — the entry point. Without it, the list is unreachable.",
        },
        {
          type: "text",
          text: "Each Node points to the next via its pointer. Nodes live anywhere in RAM — no pattern, no formula to jump.",
        },
        {
          type: "note",
          text: "Last Node's next = null → signals the chain ends here.",
        },
      ],
    },
  },
 
  // ---- HEADER: O(1) Insertion Nuance ----
  {
    id: "27",
    type: "dsaNode",
    position: { x: -160, y: 5150 },
    data: {
      label: "O(1) Insertion — The Catch",
      width: 260,
      color: "#3c4848",
      textColor: "#f8f9ff",
      points: [],
    },
  },
 
  // ---- CONTENT: Nuance ----
  {
    id: "28",
    type: "dsaNode",
    position: { x: -380, y: 5300 },
    data: {
      width: 320,
      color: "#c0cccc",
      textColor: "#2d3f45",
      blocks: [
        {
          type: "text",
          text: "Insertion is O(1) ONLY if you already have the position's pointer. Otherwise, finding that position takes O(n) traversal first.",
        },
        {
          type: "note",
          text: "True O(1) only at head, or when you already hold the pointer mid-traversal.",
        },
      ],
    },
  },
 
  // ---- HEADER: Mental Model Shift ----
  {
    id: "29",
    type: "dsaNode",
    position: { x: -160, y: 5550 },
    data: {
      label: "Mental Model: Index → Traversal",
      width: 280,
      color: "#3c4848",
      textColor: "#f8f9ff",
      points: [],
    },
  },
 
  // ---- CONTENT: Mental model ----
  {
    id: "30",
    type: "dsaNode",
    position: { x: -380, y: 5700 },
    data: {
      width: 320,
      color: "#c0cccc",
      textColor: "#2d3f45",
      blocks: [
        {
          type: "text",
          text: "Array thinking: 'Which position? Jump there directly.'",
        },
        {
          type: "text",
          text: "Linked List thinking: 'Start at head, follow next, one link at a time — no direct jump exists.'",
        },
        {
          type: "note",
          text: "This shift must become automatic when solving Linked List problems.",
        },
      ],
    },
  },
 
  // ---- HEADER: Trade-off + Trigger ----
  {
    id: "31",
    type: "dsaNode",
    position: { x: -160, y: 5950 },
    data: {
      label: "Trade-off & When to Think Linked List",
      width: 300,
      color: "#3c4848",
      textColor: "#f8f9ff",
      points: [],
    },
  },
 
  // ---- CONTENT: Final trade-off + trigger ----
  {
    id: "32",
    type: "dsaNode",
    position: { x: -380, y: 6100 },
    data: {
      width: 340,
      color: "#c0cccc",
      textColor: "#2d3f45",
      blocks: [
        {
          type: "text",
          text: "Array = fast random access, rigid structure. Linked List = flexible structure, slow random access.",
        },
        {
          type: "text",
          text: "Think Linked List when: size is unpredictable, frequent insert/delete (esp. start/middle), no need for random access.",
        },
        {
          type: "text",
          text: "Think Array when: need to jump directly to a position (e.g. binary search).",
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

  {
    id: "e14-15",
    source: "14",
    target: "15",
    // sourceHandle: "right-source",
    // targetHandle: "left-target",
    type: "straight",
  },
  {
    id: "e14-16",
    source: "14",
    target: "16",
    // sourceHandle: "left-source",
    // targetHandle: "right-target",
    type: "straight",
  },
 
  // Left branch (Mid-Insertion) continues into Linked List chain
  { id: "e16-17", source: "15", target: "17", sourceHandle: "bottom-source", targetHandle: "left-target", type: "curve" },
  { id: "e17-18", source: "17", target: "18", sourceHandle: "left-source", targetHandle: "right-target", type: "curve" },
  { id: "e18-19", source: "18", target: "19", sourceHandle: "right-source", targetHandle: "left-target", type: "curve" },
  { id: "e19-20", source: "19", target: "20", sourceHandle: "left-source", targetHandle: "right-target", type: "curve" },
  { id: "e20-21", source: "20", target: "21", sourceHandle: "right-source", targetHandle: "left-target", type: "curve" },
  { id: "e21-22", source: "21", target: "22", sourceHandle: "left-source", targetHandle: "right-target", type: "curve" },
  { id: "e22-23", source: "22", target: "23", sourceHandle: "right-source", targetHandle: "left-target", type: "curve" },
  { id: "e23-24", source: "23", target: "24", sourceHandle: "left-source", targetHandle: "right-target", type: "curve" },
  { id: "e24-25", source: "24", target: "25", sourceHandle: "right-source", targetHandle: "left-target", type: "curve" },
  { id: "e25-26", source: "25", target: "26", sourceHandle: "left-source", targetHandle: "right-target", type: "curve" },
  { id: "e26-27", source: "26", target: "27", sourceHandle: "right-source", targetHandle: "left-target", type: "curve" },
  { id: "e27-28", source: "27", target: "28", sourceHandle: "left-source", targetHandle: "right-target", type: "curve" },
  { id: "e28-29", source: "28", target: "29", sourceHandle: "right-source", targetHandle: "left-target", type: "curve" },
  { id: "e29-30", source: "29", target: "30", sourceHandle: "left-source", targetHandle: "right-target", type: "curve" },
  { id: "e30-31", source: "30", target: "31", sourceHandle: "right-source", targetHandle: "left-target", type: "curve" },
  { id: "e31-32", source: "31", target: "32", sourceHandle: "left-source", targetHandle: "right-target", type: "curve" },
];