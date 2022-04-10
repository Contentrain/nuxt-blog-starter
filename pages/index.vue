<template>
  <div>
    <div class="container mx-auto px-1 w-full min-h-screen">
      <BlogHeader />
      <BlogHero />
      <div class="posts mb-24 flex flex-wrap -mx-1 lg:-mx-4">
        <PostCard v-for="post in posts" :key="post.slug" :post="post" />
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
  async asyncData({ $content }) {
    const posts = await $content('/posts').sortBy('createdAt', 'desc').fetch()
    return {
      posts,
    }
  },
}
</script>
<style lang="postcss"></style>
