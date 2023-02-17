<template>
  <div>
    <h2>Проекты</h2>
    Детали проета {{ id }}
    </div>
</template>

<script setup>
const { id } = useRoute().params;

</script>

<style scoped></style>
