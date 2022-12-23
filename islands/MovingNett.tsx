import { useState } from "preact/hooks";
import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
const colors = ["#ffe6f9", "#ffb3ed", "#ff80e1", "#ff4dd5", "#ff1ac9"];

export default function MovingNeTT(props: JSX.HTMLAttributes<SVGElement>) {
  //tw`bg-maid-100 bg-maid-200 bg-maid-300 bg-maid-400 bg-maid-500`;
  const arr = new Array(5 + Math.floor(Math.random() * 30)).fill(null);
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
  }, 2500);

  return (
    <svg width="100%" height="100%" class="absolute -z-40 min-h-screen">
      {items.map((poss, i) => (
        <g key={`bgItem-${i}`}>
          {IS_BROWSER &&
            (
              <image
                href="/nettdoru.webp"
                class={`transition-all duration-[2000ms] ease-in-out transform animate-bounce scale-${Math.random() < 0.5 ? 110 : 100}`}
                y={(window.innerHeight * (poss[1])) / 100}
                x={(window.innerWidth * (poss[0])) / 100}
                width="32"
                height="32"
              />
            )}
        </g>
      ))}
    </svg>
  );
}
