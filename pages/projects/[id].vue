<template>
  <div class="container">
    <div class="project-details">
      <h1 class="title-1">{{ project.title }}</h1>

      <img
        :src="`/img/projects/${project.imgNameDetails }.png`"
        alt=""
        class="project-details__cover"
      />

      <div class="project-details__desc">
        {{ project.description }}
      </div>
      <div class="skills">
    <span class="skill" v-for="(skill, i) of project.skillsDetails" :key="i">{{ skill }}</span>
  </div>

      <NuxtLink :to="project.url" class="btn-outline">
        <img src="/img/icons/gitHub-black.svg" alt="" />
        GitHub repo
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import projectsData from '../../assets/moki/projects.json'
const { id } = useRoute().params;
const project = ref(projectsData[id]);
</script>

<style scoped></style>
