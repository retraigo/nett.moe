export function Logo({ width, height }: { width: string; height: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={width}
      width={height}
      viewBox="0 0 192 192"
    >
      <defs>
        <clipPath id="clipShadow">
          <path
            d="M -4 28 A 24 54 3 1 1 36 28 A 24 24 3 0 0 -4 28 Z"
            fill="rgba(0,0,0,0.2)"
          />
        </clipPath>
        <clipPath id="clipEye">
          <circle cx="16" cy="0" r="24" />
        </clipPath>
        <clipPath id="clipInnerEye">
          <circle cx="16" cy="16" r="9" />
        </clipPath>
        <linearGradient id="whiteAndBlack">
          <stop offset="50%" stop-color="#ffffff" />
          <stop offset="50%" stop-color="#000000" />
        </linearGradient>
        <linearGradient id="blackAndWhite">
          <stop offset="50%" stop-color="#000000" />
          <stop offset="50%" stop-color="#ffffff" />
        </linearGradient>
      </defs>
      <g id="base">
        <path
          id="neck"
          d="M 0 192 Q 0 182 10 182 Q 78 182 72 136 L 120 136 Q 114 182 182 182 Q 192 182 192 192 L 0 192 Z"
          fill="url(#whiteAndBlack)"
        />
        <path
          id="shirt_l"
          d="M 0 192 Q 0 182 10 182 Q 78 182 72 136 L 88 192 L 0 192 Z"
          fill="black"
        />
        <path
          id="shirt_r"
          d="M 192 192 Q 192 182 182 182 Q 120 182 120 136 L 104 192 L 192 192 Z"
          fill="white"
        />
        <path
          id="collar_l"
          d="M 64 192 L 72 136 L 88 192 L 64 192 Z"
          fill="white"
          stroke="black"
          stroke-width="0.5"
        />
        <path
          id="collar_r"
          d="M 128 192 L 120 136 L 104 192 L 128 192 Z"
          fill="white"
          stroke="black"
          stroke-width="0.5"
        />
        <path
          id="ear_l"
          d="M 0 96 Q 0 92 64 92 L 64 106 Q 0 106 0 96 Z"
          fill="white"
        />
        <path
          id="ear_r"
          d="M 192 96 Q 192 92 128 92 L 128 106 Q 192 106 192 96 Z"
          fill="black"
        />
      </g>
      <ellipse
        id="head"
        cx="96"
        cy="88"
        rx="56"
        ry="64"
        fill="url(#blackAndWhite)"
      />
      <ellipse
        id="eye_l"
        cx="68"
        cy="88"
        rx="15"
        ry="10"
        fill="white"
      />
      <ellipse
        id="eye_r"
        cx="124"
        cy="88"
        rx="15"
        ry="10"
        fill="black"
      />
    </svg>
  );
}
