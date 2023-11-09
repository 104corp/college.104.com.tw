<template>
  <div class="ScrollingAnnouncement">
    <div
      class="relative overflow-hidden mx-auto max-w-360 h-36 text-14 bg-white border border-[#D1ECEA] rounded-22"
      md="max-w-600 h-44 text-16"
    >
      <div class="relative overflow-hidden h-full">
        <TransitionGroup
          name="animate-scrolling"
          tag="ul"
          class="relative w-full h-full"
        >
          <li
            v-for="(item, index) in props.list"
            v-show="index === activeIndex"
            :key="item.title"
            class="absolute flex items-center w-full h-full bg-white"
          >
            <div
              class="flex-shrink-0 flex items-center px-8 h-full font-700 text-lake-200 bg-[#D1ECEA]"
              md="px-16"
            >
              <p
                class="overflow-hidden flex justify-end w-28 whitespace-no-wrap"
                md="w-64"
              >
                {{ item.type }}
              </p>
            </div>
            <div
              class="flex-1 p-8 min-w-0"
              md="px-16"
            >
              <a
                v-if="item.url"
                :href="item.url"
                target="_blank"
                :data-gtm-index="`快訊-${item.type}-${item.title}`"
                class="relative flex items-center justify-between hover:text-lake-200"
              >
                <p class="line-clamp-1">{{ item.title }}</p>
                <span class="flex-shrink-0 i-icon:arrow text-16"></span>
              </a>
              <p
                v-else
                class="line-clamp-1"
              >
                {{ item.title }}
              </p>
            </div>
          </li>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  onMounted, ref, watch
} from 'vue'
import {
  useIntervalFn, useWindowFocus 
} from '@vueuse/core'
import { checkDataType } from '@/utils/typeChecker.js'

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
    validator (value) {
      const dataType = [ {
        type: 'string',
        title: 'string',
        url: 'string|null'
      } ]
      return checkDataType(dataType, value)
    }
  }
})

const isWindowFocused = useWindowFocus()
const activeIndex = ref(0)

const changeActiveIndex = () => {
  activeIndex.value = (activeIndex.value + 1) % props.list.length
}

const {
  resume, pause 
} = useIntervalFn(() => {
  changeActiveIndex()
}, 3000)

watch(isWindowFocused, (newFocus) => {
  if (!newFocus) {
    pause()
  } else {
    resume()
  }
}, { immediate: true })

onMounted(async () => {
  resume()
})
</script>

<style lang="scss">
.ScrollingAnnouncement {
}

// xl | lg | md | sm
// @screen md {}
</style>