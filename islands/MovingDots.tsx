import { useState } from "preact/hooks";
import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
const colors = ["#ffe6f9", "#ffb3ed", "#ff80e1", "#ff4dd5", "#ff1ac9"];

export default function MovingDots(props: JSX.HTMLAttributes<SVGElement>) {
  //tw`bg-maid-100 bg-maid-200 bg-maid-300 bg-maid-400 bg-maid-500`;
  const arr = new Array(10 + Math.floor(Math.random() * 10)).fill(null);
  const _items: [number, number][] = [];
  for (const _n in arr) {
    _items.push([
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ]);
  }
  const [items, setItems] = useState(_items as [number, number][]);

  function distance(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt(Math.abs((x2 - x1) ** 2) - Math.abs((y2 - y1) ** 2));
  }

  function moveItems() {
    const __items: [number, number][] = [];
    for (const _n in items) {
      __items.push([
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
      ]);
    }
    setItems(__items);
  }

  setTimeout(() => {
    moveItems();
  }, 5000);

  return (
    <svg width="100%" height="100%" class="fixed top-0 left-0 -z-40 min-h-screen">
      {items.map((poss, i) => (
        <g key={`bgItem-${i}`}>
          <marker
            id={`endLine${i}`}
            class="relative"
            viewBox="0 0 22 22"
            refX="10"
            refY="10"
            markerUnits="userSpaceOnUse"
            markerWidth="5"
            markerHeight="5"
          >
            <circle
              class="transition-all duration-[5000ms] ease-in transform absolute -z-30 rounded-full"
              cx="10"
              stroke={colors[Math.floor(Math.random() * colors.length)]}
              fill={colors[Math.floor(Math.random() * colors.length)]}
              cy="10"
              r="10px"
            />
          </marker>
          <marker
            id={`startLine${i}`}
            class="relative"
            viewBox="0 0 22 22"
            refX="10"
            refY="10"
            markerUnits="userSpaceOnUse"
            markerWidth="5"
            markerHeight="5"
          >
            <circle
              class="transition-all duration-[5000ms] ease-in transform absolute -z-30 rounded-full"
              cx="10"
              stroke={colors[Math.floor(Math.random() * colors.length)]}
              fill={colors[Math.floor(Math.random() * colors.length)]}
              cy="10"
              r="10px"
            />
          </marker>
          {IS_BROWSER &&
            (
              <path
                d={`${`M ${(window.innerWidth * (poss[0])) / 100} ${
                  (window.innerHeight * (poss[1])) / 100
                }`} L ${
                  (window.innerWidth * (items[i + 1]?.[0] || poss[0])) / 100
                } ${
                  window.innerHeight * (
                    items[i + 1]?.[1] || poss[1]
                  ) / 100
                }`}
                stroke-width="0.5px"
                class="opacity-50 transition-all duration-[5000ms] ease-in transform ` + `item${i || 99}"
                stroke={colors[Math.floor(Math.random() * colors.length)]}
                marker-end={`url(#endLine${i})`}
                marker-start={!i ? `url(#startLine${i})` : undefined}
              />
            )}
        </g>
      ))}
      <g class = "hidden bg-maid-100 bg-maid-200 bg-maid-300 bg-maid-400 bg-maid-500" />
    </svg>
  );
}
