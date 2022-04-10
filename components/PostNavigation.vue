<template>
  <div
    :class="
      prev && next ? 'justify-between' : next ? 'justify-end' : 'justify-start'
    "
    class="post-footer w-full flex items-center mb-24"
  >
    <a
      v-if="prev"
      class="text-xs flex items-center text-blue-600 hover:text-gray-900"
      :href="prev.path"
    >
      <i class="text-base ri-arrow-left-s-line mr-2"></i>
      {{ prev.title }}
    </a>
    <a
      v-if="next"
      class="text-xs flex items-center text-blue-600 hover:text-gray-900"
      :href="next.path"
    >
      {{ next.title }}
      <i class="text-base ri-arrow-right-s-line ml-2"></i>
    </a>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
    name:'PostNavigation',
    props:{
        prev:{
            type:Object,
            default(){
                return {}
            }
        },
        next:{
            type:Object,
            default(){
                return {}
            }
        }
    },
}
</script>

<style></style>
