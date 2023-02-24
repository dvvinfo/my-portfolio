<template>
  <div class="container">
    <h1 class="title-1" data-aos="fade-up">Skills</h1>

    <div class="content-list">
      <div class="content-list__item">
        <h2 class="title-2" data-aos="fade-up">Немного о себе</h2>
        <div class="content-list__text">
          <p data-aos="fade-up">Работал верстальщиком больше года . Есть коммерческий опыт.</p>
          <p data-aos="fade-up">Стремительно развиваюсь в сторону frontend разработчика, Vue.</p>
          <p data-aos="fade-up">
            Имею коммерческий опыт работы с Vue.js (Nuxt.js) , включая разработку
            интерактивных веб-приложений. Способен эффективно работать в
            командной и выполнять проекты в срок. Отличные коммуникативные
            способности, умение "гуглить" и решать проблемы. Стремлюсь быть в
            курсе последних отраслевых тенденций и технологий.</p
          >
        </div>
      </div>
    </div>

    <div class="content-list">
      <div class="content-list__item">
        <h2 class="title-2" data-aos="fade-up">Frontend</h2>
        <Skills data-aos="flip-up" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.content-list__text{
  margin-bottom: 20px;
  text-align: left;
}
</style>
