<template>
  <div>
    <div class="container mx-auto px-1 w-full min-h-screen">
      <BlogHeader />
      <BlogHero />
      <div class="posts mb-24 flex flex-wrap -mx-1 lg:-mx-4">
        <PostCard v-for="i in 10" :key="i" />
      </div>
    </div>
    <div>
      <BlogFooter />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style lang="postcss"></style>
