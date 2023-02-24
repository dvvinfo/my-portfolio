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
      <div class="header__wrapper">
        <h1 class="header__title" data-aos="fade-up">
          <strong>Привет, меня зовут <em>Владимир</em></strong
          ><br />
          я frontend developer
        </h1>
        <div class="header__text" data-aos="fade-up">
          <p>со страстью к программированию и обучению</p>
        </div>
        <a href="#!" class="btn" data-aos="fade-up">Download CV</a>
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
            <p >© 2022 frontend-dev.com</p>
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
