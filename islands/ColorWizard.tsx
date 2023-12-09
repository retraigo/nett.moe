import { useState } from "preact/hooks";
import { Color } from "https://deno.land/x/colors@v1.2.0/mod.ts";

function getColor(c: string): Color {
  try {
    return new Color(c);
  } catch (e) {
    return new Color("#ffcef1");
  }
}

function getShade(c: string, w: number): Color {
  const color = getColor(c);
  return color.shade(w);
}

function getTint(c: string, w: number): Color {
  const color = getColor(c);
  return color.tint(w);
}

export default function ColorWizard() {
  const [color, setColor] = useState("#ffcef1");
  return (
    <main class="flex-1 w-full max-w-10xl p-4 mx-auto md:px-8 py-4 mt-5">
      <div id="top" class="flex flex-col items-center space-y-16">
        <div class="flex flex-col items-center">
          <h1 class="text-2xl font-bold">Color Shades / Tints Generator</h1>
        </div>
        <div class="flex flex-col lg:flex-row items-center gap-2 w-full lg:justify-center">
          <label for="colorPickerText" class="flex-grow-1 font-bold text-xl">
            Color
          </label>
          <input
            class="p-2 w-24 border-chaos-foreground bg-chaos-secondary focus:border-2 h-8"
            id="colorPickerText"
            type="text"
            value={color}
            //@ts-ignore I KNOW IT DOES EXIST
            onInput={(e) => setColor(e.target?.value)}
          />
          <label for="colorPicker">+</label>
          <input
            class="hidden"
            id="colorPicker"
            type="color"
            value={color}
            //@ts-ignore I KNOW IT DOES EXIST
            onInput={(e) => setColor(e.target?.value)}
          />
        </div>
        <div class="flex flex-col gap-4 items-center w-full max-w-6xl">
          <p class="font-semibold uppercase text-xl">RESULT</p>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full items-center">
            {Object.entries(getColor(color).toJSON()).map(([k, v]) => (
              <>
                <span class="font-semibold text-2xl">{k}</span>
                <input class="lg:col-span-3 p-2 w-full border-chaos-foreground bg-chaos-secondary focus:border-2 h-8" value={Array.isArray(v) ? v.join(", ") : String(v)} />
              </>
            ))}
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-2 items-center w-full">
            <h3 class="font-semibold text-2xl">Shades</h3>
            <div class="lg:flex gap-2 col-span-3">
              {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((w) => (
                <div
                  class="p-2 w-full lg:w-24 h-12 text-center text-white font-semibold cursor-pointer"
                  style={`background-color: ${getShade(color, w).toString()}`}
                  title="Click to copy"
                  onClick={(_) =>
                    navigator.clipboard.writeText(getShade(color, w).hex)}
                >
                  {`${w}%`}
                </div>
              ))}
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-2 items-center w-full">
            <h3 class="font-semibold text-2xl">Shades (To Copy)</h3>
            <div class="lg:flex gap-2 col-span-3">
              <textarea
                class="w-full border-chaos-foreground bg-chaos-secondary focus:border-2 p-2"
                value={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((w) =>
                  `"${getShade(color, w).hex}"`
                ).join(", ")}
              >
              </textarea>
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-2 items-center w-full">
            <h3 class="font-semibold text-2xl">Tints</h3>
            <div class="lg:flex gap-2 col-span-3">
              {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((w) => (
                <div
                  class="p-2 w-full lg:w-24 h-12 text-center text-black font-semibold cursor-pointer"
                  style={`background-color: ${getTint(color, w).toString()}`}
                  title="Click to copy"
                  onClick={(_) =>
                    navigator.clipboard.writeText(getTint(color, w).hex)}
                >
                  {`${w}%`}
                </div>
              ))}
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-2 items-center w-full">
            <h3 class="font-semibold text-2xl">Tints (To Copy)</h3>
            <div class="lg:flex gap-2 col-span-3">
              <textarea
                class="w-full border-chaos-foreground bg-chaos-secondary focus:border-2 p-2"
                value={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((w) =>
                  `"${getTint(color, w).hex}"`
                ).join(", ")}
              >
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
