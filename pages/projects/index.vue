<template>
  <div class="container">
    <h2 class="title-1">Проекты</h2>
    <ul class="projects">
      <ProjectCard
        :project="project"
        v-for="project in projects"
        :key="project.id"
      />
    </ul>
  </div>
</template>

<script setup>
import projectsData from "../../assets/moki/projects.json";
const projects = ref(projectsData);

useHead({
  title: 'Портфолио | Владимир | Проекты'
})
</script>

<style scoped></style>
