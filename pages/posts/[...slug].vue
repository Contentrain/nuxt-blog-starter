<template>
  <main class="container mx-auto px-1 w-full min-h-screen">
    <ContentDoc v-slot="{ doc }">
      <div class="post-hero py-24 flex justify-between items-center flex-wrap">
        <div
          class="post-card__cover-image mb-12 sm:mb-0 sm:w-1/2 w-full sm:pr-4"
        >
          <img
            class="w-full h-auto rounded-md"
            :src="doc.coverImage.split('public')[1]"
            :alt="doc.title"
          />
        </div>
        <div class="post-detail sm:w-1/2 w-full sm:pl-4">
          <div class="post-card_title">
            <h2 class="text-xl font-semibold mb-2">
              {{ doc.title }}
            </h2>
          </div>
          <div class="post-card_description">
            <p class="text-base text-gray-500 mb-2">
              {{ doc.description }}
            </p>
          </div>
          <div
            class="post-card__header text-gray-500 flex items-center py-2 mb-2"
          >
            <span class="w-6 h-6">
              <img
                class="rounded-full w-full h-auto"
                :src="doc.author.avatarImage.split('public')[1]"
                alt="Cover image"
            /></span>
            <span class="text-xs mx-2"> {{ doc.author.displayName }} </span>
            <i class="ri-checkbox-blank-circle-fill text-gray-300 text-xs"></i>
            <span class="text-xs mx-2">{{ doc.author.role }}</span>
            <i class="ri-checkbox-blank-circle-fill text-gray-300 text-xs"></i>
            <span class="text-xs mx-2">{{
              new Date(doc.createdAt).toLocaleDateString()
            }}</span>
          </div>
          <div class="post-tags flex">
            <span
              v-for="tag in doc.tags"
              :key="tag"
              :class="
                tagColors[Math.floor(Math.random() * tagColors.length)].bg
              "
              class="text-xs rounded-lg p-1 mr-2"
            >
              <span
                :class="
                  tagColors[Math.floor(Math.random() * tagColors.length)].text
                "
                class="mx-1 font-semibold"
                >#{{ tag }}</span
              >
            </span>
          </div>
        </div>
      </div>
      <hr class="mb-12 text-gray-300" />
      <article class="prose prose-gray lg:prose-lg mx-auto">
        <ContentRenderer :value="doc" />
      </article>
      <ContentNavigation>
        <hr class="mb-2 text-gray-300" />
        <PostNavigation :prev="prev" :next="next" />
      </ContentNavigation>
    </ContentDoc>
  </main>
</template>
<script setup>
const { path } = useRoute();

const [prev, next] = await queryContent("posts").findSurround({
  _path: path,
});
const nuxtApp = useNuxtApp();
nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
});
const tagColors = [
  {
    text: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    text: "text-red-500",
    bg: "bg-red-100",
  },
  {
    text: "text-yellow-500",
    bg: "bg-yellow-100",
  },
  {
    text: "text-green-500",
    bg: "bg-green-100",
  },
];
</script>
