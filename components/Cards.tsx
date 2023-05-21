interface CardPlainProps {
  title: string;
  description: string[];
}

export function CardPlain(props: CardPlainProps) {
  return (
    <div class="p-4">
      <div class="max-w-2xl rounded-xl w-full p-4">
        <div class="flex flex-col items-stretch space-y-4 text-center">
          <div class="text-3xl font-semibold">{props.title}</div>
          {props.description.map((desc, i) => (
            <div
              key={`desc${i}`}
              class="text-base text-zinc-100"
            >
              {desc}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface JustSomeTextProps {
  description: string[];
}

export function JustSomeText(props: JustSomeTextProps) {
  return (
    <div class="p-4">
      <div class="rounded-xl w-full p-4">
        <div class="flex flex-col items-stretch space-y-4 text-center lg:text-left">
          {props.description.map((desc, i) => (
            <div
              key={`desc${i}`}
              class="text-base lg:text-xl text-zinc-100"
            >
              {desc}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface CardChoiceProps {
  image: string;
  title: string;
  link: string;
  description: string;
}

export function CardChoice(props: CardChoiceProps) {
  return (
    <div class="p-4 w-full">
      <div
        class="
        w-full
        p-4
        rounded-xl
        mx-auto
        h-full
        block
        bg-opacity-20
        transform
        tracking-wide
        transition
        duration-500
        ease-in-out
        group
        hover:-translate-y-1 hover:scale-110
      "
      >
        <a href={props.link} class="p-4">
          <div class="flex flex-col items-center w-full">
            <img
              src={props.image}
              class="w-full md:h-48 md:w-48 object-cover rounded-full"
              alt={props.title}
            />
          </div>
          <span class="flex-grow p-2 px-8">
            <p class="text-3xl font-bold pt-3 text-center">
              {props.title}
            </p>
            <div class="py-3 text-center">
              {props.description}
            </div>
          </span>
        </a>
      </div>
    </div>
  );
}

interface CardTimelineProps {
  title: string;
  description: string;
  image: string;
  time: string;
}

export function CardTimeline(props: CardTimelineProps) {
  return (
    <div class="p-4 w-full">
      <div class="max-w-2xl rounded-xl w-full p-4">
        <div
          class="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8"
        >
          <div class="flex-shrink-0 flex justify-center">
            <img
              src={props.image}
              class="object-cover rounded-full w-48 h-48"
              alt={props.title}
            />
          </div>
          <div
            class="flex flex-col items-center lg:items-start text-left space-y-4"
          >
            <div class="text-base font-semibold uppercase">
              {props.time}
            </div>
            <div class="text-xl text-chaos-foreground">{props.title}</div>
            <div class="text-sm text-gray-400 text-justify">
              {props.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SVGPath {
  fill: string;
  path: string;
}

interface ProjectLink {
  title: string;
  url: string;
  viewbox: string;
  icon: SVGPath[];
}

interface CardProjectProps {
  title: string;
  description: string;
  image: string;
  links: ProjectLink[];
}

export function CardProject(props: CardProjectProps) {
  return (
    <div class="p-4 w-full">
      <div class="max-w-2xl rounded-xl w-full p-4">
        <div
          class="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8"
        >
          <div class="flex-shrink-0 flex justify-center">
            <img
              src={props.image}
              class="object-cover rounded-full w-48 h-48"
              alt={props.title}
            />
          </div>
          <div
            class="flex flex-col items-center lg:items-start text-left space-y-4"
          >
            <div
              class="text-base font-semibold uppercase flex flex-row items-center space-x-2"
            >
              {props.links.map((link) => {
                return (
                  <a href={link.url} class = "block transition duration-500 ease-in-out transform hover:-translate-y-0.5" target="_blank">
                    <span class = "sr-only">Open {props.title}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox={link.viewbox}
                      fill="none"
                      stroke="#fccef1"
                      strokeWidth="2"
                    >
                      {link.icon.map((icon) => (
                        <path d={icon.path} fill={icon.fill} />
                      ))}
                    </svg>
                  </a>
                );
              })}
            </div>
            <div class="text-xl text-chaos-foreground">{props.title}</div>
            <div class="text-sm text-gray-400 text-justify">
              {props.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
