<template>
    <BlogHero></BlogHero>
  <div class="posts mb-24 flex flex-wrap">
    <PostCard v-for="post in posts" :key="post.slug" :post="post" />
  </div>
</template>
<script setup>
const { data: posts } = await useAsyncData(
  "post",
  async () => await queryContent("posts").find()
);
</script>
