import Footer from "../components/Footer.tsx";
import { asset, Head } from "$fresh/runtime.ts";
import { JSX } from "preact";
import MovingDots from "../islands/MovingDots.tsx";
import MovingNeTT from "../islands/MovingNett.tsx";
import Fab from "../islands/Fab.tsx";
import type { AppProps } from "$fresh/src/server/types.ts";

const FabNav = [
  {
    name: "Top",
    action: "/#top",
    key: "top",
    toolTip: "Go To Top",
    routeIcon: "M18 15 L12 9 L6 15",
  },
  {
    name: "Timeline",
    action: "/#timeline",
    key: "timeline",
    toolTip: "Timeline",
    routeIcon:
      "M 12 6 L 12 12 L 16 14 M 12 12 m -10 0 a 10 10 0 1 1 20 0 a 10 10 0 1 1 -20 0",
  },
  {
    name: "Projects",
    action: "/#projects",
    key: "projects",
    toolTip: "Projects",
    routeIcon:
      "M 2 3 L 22 3 L 22 17 L 2 17 L 2 3 M 8 21 L 16 21 M 12 17 L 12 21",
  },
];

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <link rel="shortcut icon" href={asset(`/favicon.ico`)} />
        <title>Tis I - NeTT!</title>
        <meta name="title" content="NeTT" />
        <meta name="description" content="Just my personal website." />
        <meta name="theme-color" content="#fccef1" />
        <meta name="og:host" content="https://nett.moe" />
        <meta name="og:image" content="/schemingglowsmol.png" />
        <meta
          http-equiv="Content-Security-Policy"
          content="base-uri 'none';"
        />
        <link rel="stylesheet" href="/tailwind.css" />
      </Head>
      <body>
        <div class="min-h-screen flex flex-col font-montserrat text-lg tracking-wide text-gray-300 items-stretch">
          <main class="flex-1">
            <div class="inset-0 w-full fixed h-full -z-50 block pointer-events-none bg-black">
              <MovingDots />
            </div>
            <div class="inset-0 w-full fixed h-full -z-10 block pointer-events-none bg-zinc-900 opacity-50" />
            <Component />
            <Fab nav={FabNav} />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
