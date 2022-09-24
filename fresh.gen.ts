// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/index.tsx";
import * as $$0 from "./islands/Counter.tsx";
import * as $$1 from "./islands/Fab.tsx";
import * as $$2 from "./islands/MovingDots.tsx";

const manifest = {
  routes: {
    "./routes/index.tsx": $0,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
    "./islands/Fab.tsx": $$1,
    "./islands/MovingDots.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
