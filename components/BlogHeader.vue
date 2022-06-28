<template>
  <header>
    <div
      v-if="headerData"
      class="w-full flex justify-between items-center py-4"
    >
      <div class="logo-container">
        <nuxt-link to="/">
          <img
            class="w-48 h-auto"
            :src="headerData.logo.split('public')[1]"
            alt="App Icon"
          />
        </nuxt-link>
      </div>
      <div class="social-links text-2xl flex items-center">
        <nuxt-link
          v-if="$route.name !== 'index'"
          to="/"
          class="flex justify-center items-center p-1 ml-2"
        >
          <i class="ri-home-4-fill text-blue-800 ml-1"></i>
        </nuxt-link>
        <a
          v-for="(link, i) in headerData.socialIcons"
          :key="i"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex justify-center items-center p-1 ml-2"
        >
          <i :class="link.iconName" class="text-gray-800 ml-1"></i
        ></a>
      </div>
    </div>
  </header>
</template>

<script setup>
const { data } = await useAsyncData("header", () =>
  queryContent("contentrain", "header").findOne()
);
let headerData = data.value.body[0];
</script>

<style></style>
