<template>
  <div class="container">
    <ProjectDetails :project="project" />
  </div>
</template>

<script setup>
import projectsData from "../../assets/moki/projects.json";
const { id } = useRoute().params;
const project = ref(projectsData[id]);
</script>

<style scoped></style>
