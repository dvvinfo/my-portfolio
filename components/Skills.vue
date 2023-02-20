<template>
  <div class="skills">
    <span class="skill" v-for="(skill, i) of skills" :key="i">{{ skill }}</span>
  </div>
</template>

<script setup>
const skills = [
  "JavaScript",
  "TypeScript",
  "VueJS",
  "Pinia",
  "HTML",
  "PUG",
  "CSS",
  "SCSS",
  "NPM",
  "Vite",
  "BootStrap",
  "MaterialUI",
  "TailwindCSS",
];
</script>

<style scoped>
.skills{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.skill{
    flex-shrink: 1;
    padding: 0 11px;
   border-radius: 4px;
   color: var(--white);
   background-color: var(--purple);
   margin: 0 8px 8px 0;
}
</style>

