<template>
  <div class="SectionStories bg-([url(@/assets/img/Index/bg-wave-white.png)] repeat-x) pt-60 -mt-60">
    <div class="pb-120 bg-white">
      <div class="text-(36 lake-200 center) leading-44 family-Bungee">
        STORIES
      </div>
      <h2 class="text-(20 gray-600 center) font-700">
        看看他們在職場的故事
      </h2>
      <div
        v-if="loading"
        class="loading mt-24 h-296 md:h-450"
      ></div>
      <div v-else>
        <div class="overflow-x-hidden mt-24 md:(overflow-hidden relative flex items-center justify-start)">
          <ul
            ref="$slider"
            class="flex float-left transform transition-transform duration-500"
            :style="{ 'transform': `translateX(${positionX}px)` }"
            @transitionend="resume"
          >
            <li
              v-for="profilePortfolio in profilePortfolioStore.list"
              :key="profilePortfolio.author"
              class="flex-shrink-0 box-content px-12 w-240 h-296 md:(w-400 h-402)"
            >
              <a
                :href="addQuery(profilePortfolio.url, utm)"
                target="_blank"
                class="group"
              >
                <div class="relative flex flex-col items-center pb-20">
                  <div class="overflow-hidden w-full aspect-ratio-4/3 border border-gray-200 rounded-8">
                    <BaseImage
                      :src="profilePortfolio.cover"
                      :alt="profilePortfolio.title"
                      draggable="false"
                      class="object-cover w-full h-full"
                    ></BaseImage>
                  </div>
                  <div class="absolute bottom-0 overflow-hidden w-40 aspect-ratio-1 rounded-1/2 border border-white">
                    <BaseImage
                      :src="profilePortfolio.author.avatar"
                      :alt="profilePortfolio.author.name"
                      draggable="false"
                      class="object-cover w-full h-full"
                    ></BaseImage>
                  </div>
                </div>
                <div class="font-700 text-center">
                  <div class="text-(base gray-500) line-clamp-1">
                    {{ profilePortfolio.author.name }}・{{ profilePortfolio.author.jobTitle }}
                  </div>
                  <div class="mx-auto my-8 w-20 border-(b-2 lake-200)"></div>
                  <div class="text-18 md:group-hover:text-lake-200 line-clamp-1">
                    {{ profilePortfolio.title }}
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <div class="hidden layout-container md:(block absolute left-1/2 transform -translate-x-1/2 w-full) xl:max-w-1200">
            <div class="flex justify-between">
              <button
                class="flex items-center justify-center w-32 aspect-ratio-1 bg-white rounded-1/2 shadow-button-gray"
                @click="move(page - 1)"
              >
                <i class="i-icon:arrow text-gray-500 transform rotate-180"></i>
              </button>
              <button
                class="flex items-center justify-center w-32 aspect-ratio-1 bg-white rounded-1/2 shadow-button-gray"
                @click="move(page + 1)"
              >
                <i class="i-icon:arrow text-gray-500"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:(flex gap-4 justify-center mt-24 py-8)">
          <button
            v-for="(n, pageIndex) in totalPage"
            :key="n"
            class="w-12 h-8 rounded-4 transition-width duration-500"
            :class="{
              'w-24 bg-(lake-200 op-100)': pageIndex === page,
              'bg-(gray-400 op-30)': pageIndex !== page,
            }"
            @click="move(pageIndex)"
          ></button>
        </div>
      </div>
      <div class="flex justify-center mt-24">
        <a
          :href="addQuery(profilePortfolioStore.moreLink, moreUtm)"
          target="_blank"
          class="inline-block px-16 text-(base lake-200) font-700 border border-lake-200 rounded-4 md:px-32"
        >更多他人經驗</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ref, onMounted, computed
} from 'vue'
import {
  useWindowSize, useElementSize, useIntervalFn
} from '@vueuse/core'
import { addQuery } from '@/utils/urlHandler.js'
import { useProfilePortfolio } from '@/stores/ProfilePortfolio.js'

const profilePortfolioStore = useProfilePortfolio()
const { width: windowWidth } = useWindowSize()

const loading = ref(false)
const index = ref(0)

const $slider = ref(null)
const { width: slideWidth } = useElementSize($slider)
const { width: bodyWidth } = useElementSize(document.body)

const utm = {
  utm_source: 'cweb_studentmainpage',
  utm_medium: 'university_toolbox'
}
const moreUtm = {
  utm_source: 'cweb_studentmainpage',
  utm_medium: 'university_toolbox_seemore'
}

const startIndex = computed(() => {
  return windowWidth.value > 1024 ? 1 : 0
})

const pageSetCount = computed(() => {
  return windowWidth.value > 1024 ? 3 : 1
})

const page = computed(() => {
  return Math.floor(index.value / pageSetCount.value)
})

const totalPage = computed(() => {
  return Math.ceil(profilePortfolioStore.list.length / pageSetCount.value)
})

const positionX = computed(() => {
  const listLength = profilePortfolioStore.list.length
  return -(index.value + 0.5) / listLength * slideWidth.value + bodyWidth.value / 2
})

function move (toPage) {
  pause()
  
  if (toPage < 0) {
    index.value = startIndex.value + (totalPage.value - 1) * pageSetCount.value
  } else if (toPage > totalPage.value - 1) {
    index.value = startIndex.value
  } else {
    index.value = startIndex.value + toPage * pageSetCount.value
  }
}

const {
  pause, resume 
} = useIntervalFn(() => {
  move(page.value + 1)
}, 3000)

onMounted(async () => {
  await profilePortfolioStore.getList()
  index.value = startIndex.value
})
</script>

<style lang="scss">
.SectionStories {
}

// xl | lg | md | sm
// @screen xl {}
</style>