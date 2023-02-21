<template>
  <div class="container">
    <ProjectDetails :project="project" />
  </div>
</template>

<script setup>
import projectsData from "../../assets/moki/projects.json";
const { id } = useRoute().params;
const project = ref(projectsData[id]);

if(!project.value) {
  throw createError({statusCode: 404, statusMessage: "Проект не найден", fatal: true})
}
</script>

<style scoped></style>
