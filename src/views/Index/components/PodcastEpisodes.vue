<template>
  <div class="PodcastEpisodes">
    <ul class="flex flex-col">
      <li
        v-for="(episode, index) in props.list"
        :key="index"
        class="py-8 first:pt-0 last:pb-0 not-first:(border-(t gray-300))"
      >
        <a
          :href="episode.link"
          target="_blank"
          class="PodcastEpisodes__item group flex items-start gap-8 md:(items-center gap-16)"
        >
          <div class="PodcastEpisodes__item__img flex-shrink-0 overflow-hidden w-48 aspect-ratio-1 border border-gray-200 rounded-4 md:(w-80 rounded-6)">
            <BaseImage
              :src="episode.image"
              alt="播客"
              class="w-full h-full object-cover"
            ></BaseImage>
          </div>
          <div class="min-w-0">
            <div class="PodcastEpisodes__item__title text-14 font-700 line-clamp-2 md:text-base md:group-hover:text-lake-200">
              {{ episode.title }}
            </div>
            <div class="flex mt-8 text-(12 gray-500) md:text-14">
              {{ formatDate(episode.releaseDate) }}
              <div class="flex gap-4 ml-16 font-700 text-orange-400">
                <div class="relative flex items-center justify-center w-18 h-18 bg-orange-300 rounded-full before:(content-empty absolute ml-2 w-0 h-0 border-(solid y-4 l-8 transparent l-white))"></div>
                <div>播放</div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { } from 'vue'
import { useDateFormat } from '@vueuse/core'
import { checkDataType } from '@/utils/typeChecker.js'

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
    validator (value) {
      const dataType = [ {
        title: 'string',
        image: 'string',
        link: 'string',
        releaseDate: 'number'
      } ]
      return checkDataType(dataType, value, true)
    }
  }
})

const formatDate = (date) => {
  return useDateFormat(date, 'MM/DD').value
}
</script>

<style lang="scss">
.PodcastEpisodes {
}

// xl | lg | md | sm
// @screen md {}
</style>