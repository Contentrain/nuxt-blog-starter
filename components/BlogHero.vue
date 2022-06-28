<template>
  <div v-if="heroData" class="py-24 text-center">
    <h3 class="text-yellow-600 text-base font-bold mb-2">
      {{ heroData.subtitle }}
    </h3>
    <h1 class="text-black font-semibold text-2xl mb-2">
      {{ heroData.title }}
    </h1>
    <p class="text-gray-700 text-base max-w-lg mx-auto">
      {{ heroData.description }}
    </p>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("hero", () =>
  queryContent("contentrain", "hero").findOne()
);
let heroData = data.value.body[0];
</script>

<style></style>