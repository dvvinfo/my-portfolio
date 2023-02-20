<template>
  <ul class="nav-list">
    <li class="nav-list__item" v-for="menu in nav" :key="menu.title">
      <NuxtLink :to="menu.url" class="nav-list__link nav-list__link--active">
        {{ menu.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const nav = [
    {url: '/projects', title: 'Проекты'},
    {url: '/skills', title: 'Навыки'},
    {url: '/contacts', title: 'Контакты'}
]
</script>

<style scoped></style>
