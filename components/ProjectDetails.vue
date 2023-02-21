<template>
  <div class="project-details">
    <div class="breadcrumbs">
      <NuxtLink to="/projects" class="btn-outline"> К проектам </NuxtLink>
    </div>
    <h1 class="title-1">{{ project.title }}</h1>

    <img
      :src="`/img/projects/${project.imgNameDetails}.png`"
      alt=""
      class="project-details__cover"
    />

    <div class="project-details__desc">
      {{ project.description }}
    </div>
    <div class="skills">
      <span
        class="skill"
        v-for="(skill, i) of project.skillsDetails"
        :key="i"
        >{{ skill }}</span
      >
    </div>
    <div class="btn-wrapper">
      <NuxtLink :to="project.url" class="btn-outline mr-20" target="_blank">
        <img src="/img/icons/gitHub-black.svg" alt="" />
        GitHub repo
      </NuxtLink>
      <NuxtLink :to="project.link" class="btn-outline" target="_blank">
        Посмотреть
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { project } = defineProps(["project"]);
</script>

<style scoped>
.btn-wrapper {
  display: flex;
}
.mr-20 {
  margin-right: 20px;
}
.breadcrumbs {
  margin-bottom: 20px;
}
</style>
