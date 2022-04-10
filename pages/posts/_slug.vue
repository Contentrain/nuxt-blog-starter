<template>
  <div v-if="post">
    <div class="container mx-auto px-1 w-full min-h-screen">
      <BlogHeader />
      <div class="post-hero py-24 flex justify-between items-center flex-wrap">
        <div
          class="post-card__cover-image mb-12 sm:mb-0 sm:w-1/2 w-full sm:pr-4"
        >
          <img
            class="w-full h-auto"
            :src="post.coverImage.split('static')[1]"
            :alt="post.title"
          />
        </div>
        <div class="post-detail sm:w-1/2 w-full sm:pl-4">
          <div class="post-card_title">
            <h2 class="text-xl font-semibold mb-2">
              {{ post.title }}
            </h2>
          </div>
          <div class="post-card_description">
            <p class="text-base text-gray-500 mb-2">
              {{ post.description }}
            </p>
          </div>
          <div
            class="post-card__header text-gray-500 flex items-center py-2 mb-2"
          >
            <span class="w-6 h-6">
              <img
                class="rounded-full w-full h-auto"
                :src="post.author.avatarImage.split('static')[1]"
                alt="Cover image"
            /></span>
            <span class="text-xs mx-2"> {{ post.author.displayName }} </span>
            <i class="ri-checkbox-blank-circle-fill text-gray-300 text-xs"></i>
            <span class="text-xs mx-2">{{ post.author.role }}</span>
            <i class="ri-checkbox-blank-circle-fill text-gray-300 text-xs"></i>
            <span class="text-xs mx-2">{{
              new Date(post.createdAt).toLocaleDateString()
            }}</span>
          </div>
          <div class="post-tags flex">
            <span
              v-for="tag in post.tags"
              :key="tag"
              :class="tagColors[Math.floor(Math.random() * tagColors.length)].bg"
              class="text-xs rounded-lg p-1 mr-2"
            >
              <span
                :class="tagColors[Math.floor(Math.random() * tagColors.length)].text"
                class="mx-1 font-semibold"
                >#{{ tag }}</span
              >
            </span>
          </div>
        </div>
      </div>
      <hr class="mb-12 text-gray-300" />
      <article class="post mb-24 flex flex-wrap">
        <nuxt-content :document="post"></nuxt-content>
      </article>
      <hr class="mb-2 mt-12 text-gray-300" />
      <PostNavigation :prev="prev" :next="next" />
    </div>
    <div>
      <BlogFooter />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()
    const [prev, next] = await $content('posts')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      post,
      next,
      prev,
    }
  },
  data() {
    return {
      tagColors: [
        {
          text: 'text-blue-500',
          bg: 'bg-blue-100',
        },
        {
          text: 'text-red-500',
          bg: 'bg-red-100',
        },
        {
          text: 'text-yellow-500',
          bg: 'bg-yellow-100',
        },
        {
          text: 'text-green-500',
          bg: 'bg-green-100',
        },
      ],
    }
  },
}
</script>
