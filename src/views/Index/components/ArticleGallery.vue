<template>
  <div
    v-if="props.list.slice(0, 1).length"
    class="ArticleGallery flex flex-col mt-8"
    md="flex-row justify-center items-center gap-48 mt-0"
  >
    <a
      v-for="article in props.list.slice(0, 1)"
      :key="article.title"
      :href="article.link"
      target="_blank"
      class="group flex flex-col gap-12 pb-12 border-(b gray-300)"
      md="w-420 border-none pb-0"
    >
      <div class="flex overflow-hidden border border-gray-200 rounded-16">
        <BaseImage
          :src="article.image"
          :alt="article.title"
          class="w-full object-cover rounded-11 aspect-16/9"
          md="transition-transform duration-300 linear group-hover:(transform scale-110)"
        ></BaseImage>
      </div>
      <div class="min-w-0">
        <div class="flex items-center gap-8 text-(base lake-200) font-700">
          <div
            class="i-icon:pinned text-(16 lake-200)"
            :class="{ 'hidden': !article.isPinned }"
          ></div>
          <div>{{ props.categoryName }}</div>
        </div>
        <p
          class="text-16 leading-24 font-700 line-clamp-2"
          md="text-18 transition-color duration-300 linear group-hover:(text-lake-200)"
        >
          {{ article.title }}
        </p>
        <p
          class="mt-4 text-14 line-clamp-2"
          md="text-base line-clamp-3"
        >
          {{ article.content }}
        </p>
      </div>
    </a>
    <div
      v-if="props.list.slice(1).length"
      class="flex-1"
      md="w-1/2"
    >
      <a
        v-for="article in props.list.slice(1)"
        :key="article.title"
        :href="article.link"
        target="_blank"
        class="group flex flex-row-reverse items-center justify-between gap-20 py-12 border-(b gray-300)"
        md="py-16"
      >
        <div
          class="flex flex-shrink-0 overflow-hidden w-144 border border-gray-200 rounded-11"
          md="w-200 rounded-16"
        >
          <BaseImage
            :src="article.image"
            :alt="article.title"
            class="w-full object-cover aspect-16/9"
            md="transition-transform duration-300 linear group-hover:(transform scale-110)"
          ></BaseImage>
        </div>
        <div class="min-w-0">
          <div
            class="flex items-center gap-8 text-(14 lake-200) font-700"
            md="text-base"
          >
            <div
              class="i-icon:pinned text-(16 lake-200)"
              :class="{ 'hidden': !article.isPinned }"
            ></div>
            <div>{{ props.categoryName }}</div>
          </div>
          <p
            class="text-16 leading-24 font-700 line-clamp-2"
            md="text-18 transition-color duration-300 linear group-hover:(text-lake-200)"
          >
            {{ article.title }}
          </p>
          <p
            class="mt-4 text-14 line-clamp-1"
            md="text-base"
          >
            {{ article.content }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { checkDataType } from '@/utils/typeChecker.js'

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
    validator (value) {
      const dataType = [ {   
        title: 'string',
        content: 'string',
        image: 'string',
        link: 'string',
        isPinned: 'boolean'
      } ]
      return checkDataType(dataType, value, true)
    }
  },
  categoryName: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss">
.ArticleGallery {
}

// xl | lg | md | sm
// @screen xl {}
</style>