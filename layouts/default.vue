<template>
  <div>
    <nav class="nav">
      <div class="container">
        <div class="nav-row">
          <NuxtLink to="/" class="logo"><strong>Портфолио</strong> </NuxtLink>

          <button class="dark-mode-btn">
            <img
              src="../assets/img/icons/sun.svg"
              alt="Light mode"
              class="dark-mode-btn__icon"
            />
            <img
              src="../assets/img/icons/moon.svg"
              alt="Dark mode"
              class="dark-mode-btn__icon"
            />
          </button>

          <ul class="nav-list">
            <li class="nav-list__item">
              <NuxtLink
                to="/projects"
                class="nav-list__link nav-list__link--active"
              >
                Projects
              </NuxtLink>
            </li>
            <li class="nav-list__item">
              <NuxtLink to="/skills" class="nav-list__link">Skills</NuxtLink>
            </li>
            <li class="nav-list__item">
              <NuxtLink href="/contacts" class="nav-list__link"
                >Contacts</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="section">
        <slot/>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <ul class="social">
                    <li class="social__item"><a href="#!"><img src="../assets/img/icons/vk.svg" alt="Link"></a></li>
                    <li class="social__item"><a href="#!"><img src="../assets/img/icons/instagram.svg" alt="Link"></a></li>
                    <li class="social__item"><a href="#!"><img src="../assets/img/icons/twitter.svg" alt="Link"></a></li>
                    <li class="social__item"><a href="#!"><img src="../assets/img/icons/gitHub.svg" alt="Link"></a></li>
                    <li class="social__item"><a href="#!"><img src="../assets/img/icons/linkedIn.svg" alt="Link"></a></li>
                </ul>
                <div class="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
