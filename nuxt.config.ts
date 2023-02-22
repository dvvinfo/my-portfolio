import { Title } from "./.nuxt/components.d";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "~": "/<rootDir>",
    "@": "/<rootDir>",
    assets: "/<rootDir>/assets",
    public: "/<rootDir>/public",
  },
  css: ["/assets/styles/main.css"],
  app: {
    head: {
      title: "Портфолио | Владимир ",
      meta: [
        {
          name: "description",
          content:
            "Разработка сайтов, фронтенд, frontend, вёрстка, веб разработка, Vue, Nuxt",
        },
      ],
    },
  },
});
