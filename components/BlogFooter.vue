<template>
  <footer class="bg-black p-4 text-gray-100 flex justify-center items-center">
    <ul v-if="footerData" class="flex flex-wrap">
      <li v-for="(link, i) in footerData.links" :key="i">
        <a
          class="hover:text-blue-300"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          >{{ link.label }}
        </a>
        <i
          v-if="i < footerData.links.length - 1"
          class="ri-checkbox-blank-circle-fill text-gray-700 text-xs mx-4"
        ></i>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'BlogFooter',
  data() {
    return {
      footerData: null,
    }
  },
  async fetch() {
    const response = await this.$content('contentrain/Footer').fetch()
    this.footerData = response[0]
  },
}
</script>

<style></style>
