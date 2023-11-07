<template>
  <div class="PostGallery">
    <ul
      class="flex gap-16 overflow-x-scroll"
      md="gap-24 overflow-hidden"
      lg="gap-16"
    >
      <li
        v-for="(post, index) in props.list"
        :key="index"
        class="flex-1 min-w-180"
        md="min-w-250"
      >
        <a
          :href="post.link"
          target="_blank"
          class="PostGallery__item block overflow-hidden aspect-ratio-1 border border-gray-200 rounded-8"
          md="hover:shadow-card-gray"
        >
          <BaseImage
            :src="post.image"
            alt="IG貼文"
            class="w-full h-full object-cover"
          ></BaseImage>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { } from 'vue'
import { checkDataType } from '@/utils/typeChecker.js'

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
    validator (value) {
      const dataType = [ {
        image: 'string',
        link: 'string'
      } ]
      return checkDataType(dataType, value, true)
    }
  }
})
</script>

<style lang="scss">
.PostGallery {
}

// xl | lg | md | sm
// @screen md {}
</style>