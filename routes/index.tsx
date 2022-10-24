import {
  CardChoice,
  CardPerson,
  CardPlain,
  CardProject,
  CardTimeline,
} from "../components/Cards.tsx";

import { Logo } from "../components/Logo.tsx";
import Timeline from "../data/Timeline.ts";
import Projects from "../data/Projects.ts";
import DefaultLayout from "../layouts/Default.tsx";
import NeTT from "../islands/NeTT.tsx"

/*
@TIMELINE
<div class="grid grid-cols-1 gap-4">
{Timeline.map((x) => <CardTimeline {...x} />)}
</div>
*/

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

export default function Home() {
  return (
    <DefaultLayout>
      <main class="flex-1 w-full max-w-7xl p-4 mx-auto md:px-8 py-4 mt-5">
        <div id="top" class="flex flex-col items-center space-y-72">
          <NeTT />
          <div class="flex flex-col items-center">
            <CardPlain
              title="About Me"
              description={[
                `I'm Pranev, aka NeTT, a college student who makes random JavaScript programs in my free time. I usually make websites and web apps using Vue and Nuxt.`,
                `Started programming like back in 2020 when I had nothing better to do. Ended up getting quite into it.`,
                `Eventually came to be known by different names here and there, commonly as NeTT in internet communities.`,
              ]}
            />
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <CardChoice
              title="Kuro's Chaos Abyss"
              description="My Discord server."
              image="/queen.webp"
              link="https://discord.gg/A69vvdK"
            />
            <CardChoice
              title="YouTube Channel"
              description="I may or may not unleash my true cringe in YouTube."
              image="/ytimg.webp"
              link="https://www.youtube.com/channel/UCBwjrG9IYWH97PDDhl72NMQ/"
            />
          </div>
          {
            /*
          <div id="timeline" class="flex flex-col space-y-4 max-w-2xl">
            <span class="text-xl uppercase font-semibold">
              The timeline below does not include any kind of paid work I have
              done. A timeline for commissions and other paid work might be
              coming soon.
            </span>

// TEMPORARILY REMOVED @TIMELINE

          </div>
            */
          }{" "}
          <div id="projects" class="flex flex-col space-y-4 max-w-2xl">
            <span class="text-3xl font-semibold text-center">
              Projects I randomly made
            </span>
            <div class="grid grid-cols-1 gap-4">
              {Projects.sort((a, b) => (a.title.localeCompare(b.title))).map((
                x,
              ) => <CardProject {...x} />)}
            </div>
          </div>
          <div class="flex flex-col items-start space-y-4 text-center">
            <div class="p-2 w-full">
              Written by{"  "}
              <a
                href="https://github.com/retraigo"
                class="text-chaos-foreground"
              >
                Pranev
              </a>
            </div>
            <div class="p-2 w-full flex space-x-2 items-center justify-center">
              <span>Made with</span>
              <a
                href="https://fresh.deno.dev"
                class="text-chaos-foreground flex gap-2 items-center"
              >
                <span>Fresh</span>
                <img src="/logo.svg" class="w-6" alt="Fresh Logo" />
              </a>
            </div>
            <div class="p-2 w-full">
              Font used{"  "}
              <a
                href="https://fonts.google.com/specimen/Montserrat"
                class="text-chaos-foreground"
              >
                Montserrat
              </a>
            </div>
            <div class="p-2 w-full">
              Credits to the color{"  "}
              <span class="text-chaos-foreground">#fccef1</span> for existing.
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}
