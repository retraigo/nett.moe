/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";
import {
  CardChoice,
  CardPerson,
  CardPlain,
  CardTimeline,
} from "../components/Cards.tsx";
import Timeline from "../data/Timeline.ts";

import MovingDots from "../islands/MovingDots.tsx";
export default function Home() {
  return (
    <div
      class={tw`
      flex flex-col
      min-h-screen
      font-montserrat
      text-lg
      tracking-wide
      text-gray-600
      dark:text-gray-300
    `}
    >
      <Head>
        <title>Tis I - NeTT!</title>
        <meta name="title" content="NeTT" />
        <meta name="description" content="Just my personal website." />
        <meta name="theme-color" content="#fccef1" />
        <meta name="og:host" content="https://nett.moe" />
        <meta name="og:image" content="/schemingglowsmol.png" />
      </Head>
      <div
        class={tw`inset-0 w-full fixed h-full -z-50 block pointer-events-none bg-gray-200 dark:bg-chaos-primary`}
      >
        <MovingDots />
      </div>
      <div
        class={tw`
        inset-0
        w-full
        fixed
        h-full
        -z-10
        block
        pointer-events-none
        dark:bg-chaos-primary
        dark:opacity-50
        bg-gray-300
        opacity-50
      `}
      />
      <main class={tw`flex-1 w-full max-w-7xl p-4 mx-auto md:px-8 py-4 mt-5`}>
        <div class={tw`flex flex-col items-center space-y-72`}>
          <div class={tw`flex flex-col items-center mt-36`}>
            <CardPerson
              name="Pranev (NeTT)"
              title="He who paints thy world in eternal nothingness"
              description="...and writes weird javascript programs and websites. Also makes up cringe monologues and narrations."
              image="/nett.webp"
            />
          </div>
          <div class={tw`flex flex-col items-center`}>
            <CardPlain
              title="About Me"
              description={[
                `I'm Pranev, aka NeTT, a college student who makes random JavaScript programs in my free time. I usually make websites and web apps using Vue and Nuxt.`,
                `Started programming like back in 2020 when I had nothing better to do. Ended up getting quite into it.`,
                `Eventually came to be known by different names here and there, commonly as NeTT in internet communities.`,
              ]}
            />
          </div>
          <div class={tw`grid grid-cols-1 lg:grid-cols-2 gap-4`}>
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

          <div class={tw`flex flex-col space-y-4 max-w-2xl`}>
            <span class={tw`text-xl uppercase font-semibold`}>
              The timeline below does not include any kind of paid work I have
              done. A timeline for commissions and other paid work might be
              coming soon.
            </span>
            <div class={tw`grid grid-cols-1 gap-4`}>
              {Timeline.map((x) => <CardTimeline {...x} />)}
            </div>
          </div>
          <div class={tw`flex flex-col items-start space-y-4 text-center`}>
            <div class={tw`p-2 w-full`}>
              Written by{"  "}
              <a
                href="https://github.com/retraigo"
                class={tw`text-chaos-foreground`}
              >
                Pranev
              </a>
            </div>
            <div
              class={tw`p-2 w-full flex space-x-2 items-center justify-center`}
            >
              <span>Made with</span>
              <a
                href="https://fresh.deno.dev"
                class={tw`text-chaos-foreground flex gap-2 items-center`}
              >
                <span>Fresh</span>
                <img src="/logo.svg" class={tw`w-6`} alt="Fresh Logo" />
              </a>
            </div>
            <div class={tw`p-2 w-full`}>
              Font used{"  "}
              <a
                href="https://fonts.google.com/specimen/Montserrat"
                class={tw`text-chaos-foreground`}
              >
                Montserrat
              </a>
            </div>
            <div class={tw`p-2 w-full`}>
              Credits to the color{"  "}
              <span class={tw`text-chaos-foreground`}>#fccef1</span>{" "}
              for existing.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
