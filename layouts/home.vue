<template>
  <div class="bg" :class="{ dark: isDark }">
    <!-- nav -->
    <nav class="nav">
      <div class="container">
        <div class="nav-row">
          <NuxtLink to="/" class="logo"><strong>Портфолио</strong> </NuxtLink>

          <button
            class="dark-mode-btn"
            :class="{ 'dark-mode-btn--active': isDark }"
            @click="isDark = !isDark"
          >
            <img
              src="/img/icons/sun.svg"
              alt="Light mode"
              class="dark-mode-btn__icon"
            />
            <img
              src="/img/icons/moon.svg"
              alt="Dark mode"
              class="dark-mode-btn__icon"
            />
          </button>

          <Nav />
        </div>
      </div>
    </nav>

    <!-- header -->
    <header class="header">
      <div class="header__wrapper" data-aos="fade-up">
        <h1 class="header__title">
          <strong>Привет, меня зовут <em>Владимир</em></strong
          ><br />
          я frontend developer
        </h1>
        <div class="header__text">
          <p>со страстью к программированию и обучению</p>
        </div>
        <NuxtLink
          to="https://hh.ru/resume/3721bd94ff062d22010039ed1f3973364e6250"
          class="btn"
          target="_blank"
          >Посмотреть резюме
          </NuxtLink>
          <div class="scroll-button">
            <ScrollButton />
          </div>
      </div>
    </header>

    <!-- content -->
    <main class="section">
      <slot />
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer__wrapper">
          <Social />
          <div class="copyright">
            <p>© 2021 - {{ new Date().getFullYear() }} dvvinfo</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const isDark = ref(false);
if (process.client) {
  // 1. Проверка темной темы на уровне системных настроек
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    isDark.value = true;
  }

  // 2. Проверка темной темы в localStorage
  if (localStorage.getItem("darkMode") === "dark") {
    isDark.value = true;
  } else if (localStorage.getItem("darkMode") === "light") {
    isDark.value = false;
  }

  // Если меняются системные настройки, меняем тему

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      const newColorScheme = event.matches ? "dark" : "light";

      if (newColorScheme === "dark") {
        isDark.value = true;
        localStorage.setItem("darkMode", "dark");
      } else {
        isDark.value = false;
      }
    });
}
</script>

<style lang="scss" scoped></style>
