<template>
  <div
    v-if="post"
    class="post-card my-2 px-2 w-full md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3"
  >
    <nuxt-link :to="post._path">
      <div class="post-card__cover-image mb-2">
        <img
          class="object-cover rounded-xl w-full h-72 hover:grayscale transition duration-300 hover:ease-in"
          :src="post.coverImage.split('public')[1]"
          :alt="post.title"
        />
      </div>
      <div class="post-card__header text-gray-500 flex items-center py-2 mb-2">
        <span class="w-6 h-6">
          <img
            class="rounded-full w-full h-auto"
            :src="post.author.avatarImage.split('public')[1]"
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
      <div class="post-card_title">
        <h2
          class="text-xl font-semibold mb-2 overflow-hidden overflow-ellipsis h-7 transition duration-300 hover:text-blue-600"
        >
          {{ post.title }}
        </h2>
      </div>
      <div class="post-card_description">
        <p
          class="text-base text-gray-500 mb-2 overflow-hidden overflow-ellipsis h-12"
        >
          {{ post.description }}
        </p>
      </div>
      <div class="post-card__footer flex items-center justify-between">
        <div class="post-card__footer-left">
          <span class="text-xs rounded-lg p-1 bg-blue-200">
            <span class="mx-1 text-blue-500 font-semibold">{{
              post.categories[0]
            }}</span>
          </span>
        </div>
        <div class="post-card__footer-right p-1">
          <nuxt-link
            class="text-xs text-blue-600 hover:text-gray-900"
            :to="post._path"
          >
            Read more
          </nuxt-link>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style></style>
