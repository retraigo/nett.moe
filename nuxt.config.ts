// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "NeTT - Incomplete Salty Weeb Dev",
      meta: [
        {
          name: "description",
          content:
            "He who paints thy world in eternal nothingness... and writes weird javascript programs and websites. Also makes up cringe monologues and narrations. I write ML stuff for TypeScript (Deno).",
        },
        {
          name: "og:thumbnail",
          content: "glitchnett_promax.png",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
