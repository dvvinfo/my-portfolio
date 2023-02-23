// @/plugins/aos.js
// I've went ahead to declare all the config here so it is global
// Read up more here: https://github.com/michalsnik/aos

import AOS from "aos";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.AOS = new AOS.init();
});
