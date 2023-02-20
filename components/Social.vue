<template>
  <ul class="social">
    <li class="social__item" v-for="social in socials" :key="social.iconName">
      <NuxtLink :to="social.url" target="_blank"
        ><img :src="`/img/icons/${social.iconName}.svg`" alt="Link"
      /></NuxtLink>
    </li>
    <!-- <li class="social__item">
      <a href="https://t.me/dvvinfo" target="_blank"
        ><img src="../assets/img/icons/telegram.svg" alt="Link"
      /></a>
    </li>
    <li class="social__item">
      <a href="https://github.com/dvvinfo" target="_blank"
        ><img src="../assets/img/icons/gitHub.svg" alt="Link"
      /></a>
    </li>
    <li class="social__item">
      <a href="https://www.linkedin.com/in/dvvinfo/" target="_blank"
        ><img src="../assets/img/icons/linkedIn.svg" alt="Link"
      /></a>
    </li> -->
  </ul>
</template>

<script setup>
const socials = ref( [
    {url: 'https://vk.com/dvvinfo', iconName: 'vk'},
    {url: 'https://t.me/dvvinfo', iconName: 'telegram'},
    {url: 'https://github.com/dvvinfo', iconName: 'gitHub'},
    {url: 'https://www.linkedin.com/in/dvvinfo/', iconName: 'linkedIn'},
])
</script>

<style scoped></style>
