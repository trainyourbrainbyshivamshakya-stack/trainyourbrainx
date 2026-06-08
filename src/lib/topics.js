export const topics = [
  {
    slug: 'array',
    name: 'Array',
    icon: '⬛',
    blurb: 'Contiguous memory. Index-based access. The foundation of everything.',
    color: '#3b82f6',
  },
  {
    slug: 'string',
    name: 'String',
    icon: '𝐀',
    blurb: 'An array of characters with its own grammar. Patterns, parsing, transformations.',
    color: '#10b981',
  },
  {
    slug: 'linked-list',
    name: 'Linked List',
    icon: '⛓',
    blurb: "Nodes connected by pointers. Memory you don't see until you walk it.",
    color: '#f59e0b',
  },
  {
    slug: 'tree',
    name: 'Tree',
    icon: '🌳',
    blurb: "Hierarchy made of nodes. Recursion's natural shape.",
    color: '#8b5cf6',
  },
  {
    slug: 'graph',
    name: 'Graph',
    icon: '◉',
    blurb: 'Nodes and edges. The most general shape — relationships everywhere.',
    color: '#ef4444',
  },
  {
    slug: 'grid',
    name: 'Grid',
    icon: '▦',
    blurb: '2D arrays in disguise. Most matrix and pathfinding problems live here.',
    color: '#06b6d4',
  },
];

export function getTopic(slug) {
  return topics.find((t) => t.slug === slug);
}