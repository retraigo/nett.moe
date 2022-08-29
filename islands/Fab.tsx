/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

export function MiscTag(props: { children: string }) {
  return (
    <span
      class={tw`
      bg-chaos-foreground
      text-chaos-primary text-xs
      font-medium
      inline-flex
      items-center
      px-1.5
      py-0.5
      rounded
      `}
    >
      {props.children}
    </span>
  );
}

export default function Fab(
  props: {
    nav: {
      name: string;
      action: string;
      key: string;
      toolTip: string;
      routeIcon: string;
    }[];
  },
) {
  const [toggleNav, setToggleNav] = useState(false);

  function toggleBoth() {
    setToggleNav(!toggleNav);
  }

  function toggleOn() {
    setToggleNav(true);
  }

  function toggleOff() {
    setToggleNav(false);
  }

  return (
      <div
        class={tw`fixed p-4 bottom-0 right-0 space-y-4 z-40`}
      >
        <div
          id="fabItems"
          class={tw`mx-auto transform transition-all duration-500 ease-in-out mb-7 ${
            toggleNav ? "translate-x-0" : "translate-x-130 overflow-x-hidden"
          }`}
        >
          <div
            class={tw`space-y-4 w-full mx-auto`}
          >
            {props.nav.map((navItem) => (
              <div key={navItem.key} class = {tw`mx-auto`}>
                <a
                  class={tw`relative p-2 group flex items-center justify-center cursor-pointer`}
                  href={navItem.action}
                >
                  <span
                    class={tw`rounded-full relative group p-4 w-16 h-16 bg-chaos-tertiary`}
                  >
                    <div
                      class={tw`px-auto mx-auto stroke-white stroke-2`}
                    >
                      <svg
                        class={tw`block h-8 w-8 stroke-white stroke-2 mx-auto`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="#fccef1"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          class={tw`transition-all duration-500 transform ease-in-out`}
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d={navItem.routeIcon}
                        />
                      </svg>
                    </div>
                    <div
                      class={tw`absolute -left-28 mr-4 max-w-[70rem] transition-all overflow-hidden duration-500 ease-in-out text-right lg:max-w-0 lg:group-hover:max-w-[70rem]`}
                    >
                      <MiscTag>{navItem.toolTip}</MiscTag>
                    </div>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div
          id="fabButton"
          class={tw`mx-auto rounded-full bg-chaos-tertiary mx-auto w-16 h-16 z-50`}
        >
          <button
            class={tw`p-4 transform transition duration-500 mx-auto ease-in-out mx-auto block ${
              toggleNav ? "rotate-90" : ""
            }`}
            onClick={toggleBoth}
          >
            <svg
              class={tw`block h-8 w-8 stroke-white stroke-2 ${
                toggleNav ? "rotate-45" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                class={tw`transition-all duration-500 transform ease-in-out`}
                stroke-linecap="round"
                stroke-linejoin="round"
                d={`M 0 12 h 24 M 12 0 v 24 m 0`}
              />
            </svg>
          </button>
        </div>
      </div>

  );
}