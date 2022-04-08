<template>
  <div>
    <div class="container mx-auto px-1 w-full min-h-screen">
      <BlogHeader />
      <div class="post mb-24 flex flex-wrap -mx-1 lg:-mx-4">
        <nuxt-content :document="post"></nuxt-content>
      </div>
    </div>
    <div>
      <BlogFooter />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug ).fetch()
    console.log(post, 'post')
    return {
      post,
    }
  },
}
</script>

<style></style>
