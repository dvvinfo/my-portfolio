<template>
  <li class="project">
    <NuxtLink :to="`/projects/${project.id}`">
      <img
        :src="`/img/projects/${project.imgName}.png`"
        :alt="project.title"
        class="project__img"
      />
      <h3 class="project__title">{{ project.title }}</h3>
    </NuxtLink>
  </li>
</template>

<script setup>
const { project } = defineProps(["project"]);
</script>

<style scoped></style>
