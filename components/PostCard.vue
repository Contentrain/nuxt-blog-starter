<template>
  <div class="post-card my-2 px-2 w-full md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3">
    <div class="post-card__cover-image mb-2">
      <img
        class="object-cover rounded-xl w-full h-72"
        src="https://picsum.photos/500/500"
        alt="Cover image"
      />
    </div>
    <div class="post-card__header text-gray-500 flex items-center py-2 mb-2">
      <span class="w-6 h-6"
        ><img
          class="rounded-full w-full h-auto"
          src="https://picsum.photos/500/500"
          alt="Cover image"
      /></span>
      <span class="text-xs mx-2"> John Doe </span>
      <i class="ri-checkbox-blank-circle-fill text-gray-300 text-xs"></i>
      <span class="text-xs mx-2">Design</span>
      <i class="ri-checkbox-blank-circle-fill text-gray-300 text-xs"></i>
      <span class="text-xs mx-2">20 Jan 2021</span>
    </div>
    <div class="post-card_title">
      <h2 class="text-xl font-semibold mb-2">Lorem ipsum dolor dolore dolor</h2>
    </div>
    <div class="post-card_description">
      <p
        class="text-base text-gray-500 mb-2 overflow-hidden overflow-ellipsis h-12"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, mollitia.
        Minima voluptatum mollitia deleniti nobis nisi delectus illum expedita,
        similique, ratione, repellendus qui natus odit fuga accusantium.
        Tempore, veritatis ipsam.
      </p>
    </div>
    <div class="post-card__footer flex items-center justify-between">
      <div class="post-card__footer-left">
        <span class="text-xs rounded-lg p-1 bg-green-200">
          <span class="mx-1 text-black">jamstack</span>
        </span>
      </div>
      <div class="post-card__footer-right p-1">
        <nuxt-link
          class="text-xs text-blue-600 hover:text-gray-900"
          tag="a"
          to="/posts/lorem-ipsum-dolor-dolore-dolor"
        >
          Read more
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
}
</script>

<style></style>
