import AOS from "aos";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.AOS = new AOS.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
    disable: window.innerWidth < 580
  });
});
