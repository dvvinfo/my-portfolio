<template>
  <div>
    <nav class="nav">
      <div class="container">
        <div class="nav-row">
          <NuxtLink to="/" class="logo"><strong>Портфолио</strong> </NuxtLink>

          <button class="dark-mode-btn">
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

<script setup></script>

<style lang="scss" scoped></style>
