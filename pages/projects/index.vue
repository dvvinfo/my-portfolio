<template>
  <div class="container">
    <h2 class="title-1" data-aos="fade-up">Проекты</h2>
    <ul class="projects">
      <ProjectCard
      data-aos="flip-up"
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
