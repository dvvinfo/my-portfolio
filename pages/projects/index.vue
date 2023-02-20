<template>
  <div class="container">
    <h2 class="title-1">Проекты</h2>
    <ul class="projects">
      <li class="project" v-for="project in projects" :key="project.id">
        <NuxtLink :to="`/projects/${project.id}`">
          <img
            :src="`/img/projects/${project.imgName}.png`"
            :alt="project.title"
            class="project__img"
          />
          <h3 class="project__title">{{ project.title }}</h3>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import projectsData from '../../assets/moki/projects.json'
const projects = ref(projectsData);
</script>

<style scoped></style>
