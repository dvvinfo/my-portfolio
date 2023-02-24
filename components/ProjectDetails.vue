<template>
  <div class="project-details">
    <div class="breadcrumbs">
      <NuxtLink to="/projects" class="btn-outline" data-aos="fade-up"> К проектам </NuxtLink>
    </div>
    <h1 class="title-1" data-aos="fade-up">{{ project.title }}</h1>
    <div class="project-details-slider" data-aos="flip-up">
      <div class="slider-wrapper" >
      <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
      :navigation="true"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }"
    >
      <SwiperSlide v-for="(img, i) in project.imgNameDetails " :key="i">
        <div class="project-detail__img">
      <img
        :src="`/img/projects/details/${img.detailsImgName}.png`"
        alt=""
        class="project-details__cover"
      />
    </div>
      </SwiperSlide>
    </Swiper>

    </div>
    <div class="project-details__desc">
      {{ project.description }}
    </div>
    <div class="skills" data-aos="fade-up">
      <span
        class="skill"
        v-for="(skill, i) of project.skillsDetails"
        :key="i"
        >{{ skill }}</span
      >
    </div>
    </div>
    <div class="btn-wrapper" data-aos="fade-up">
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
  flex-shrink: 1;
}
.mr-20 {
  margin-right: 20px;
}
.breadcrumbs {
  margin-bottom: 20px;
}
.project-details-slider{
  max-width: 100%;
}
.slider-wrapper{
  max-width: 100%;
  margin-bottom: 40px;
  box-shadow: 0px 5px 35px rgba(0, 0, 0, 0.25);
  padding: 10px;
  
}
@media (max-width: 360px) {
  .btn-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .mr-20{
    margin-right: 0;
  }
  .project-details__desc {
    font-size: 20px;
}

}

</style>
