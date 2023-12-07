<template>
  <h3
    class="ScrollingTitle flex justify-center flex-wrap gap-8 text-24 font-700 text-white"
    md="text-36 leading-48"
  >
    <p>{{ props.prefix }}</p>
    <TransitionGroup
      name="animate-scrolling"
      tag="ul"
      class="overflow-hidden relative w-96 h-32"
      md="w-144 h-48"
    >
      <li
        v-for="(word, index) in props.mainWord"
        v-show="index === activeIndex"
        :key="word"
        class="absolute text-(center [#FFF1C1])"
      >
        {{ word }}
      </li>
    </TransitionGroup>
    <p>一站滿足！</p>
  </h3>
</template>

<script setup>
import {
  onMounted, ref, watch
} from 'vue'
import {
  useIntervalFn, useWindowFocus 
} from '@vueuse/core'

const props = defineProps({
  prefix: {
    type: String,
    default: '大學生'
  },
  mainWord: {
    type: Array,
    default: () => ([])
  }
})

const isWindowFocused = useWindowFocus()
const activeIndex = ref(0)

const changeActiveIndex = () => {
  activeIndex.value = (activeIndex.value + 1) % props.mainWord.length
}

const {
  resume, pause 
} = useIntervalFn(() => {
  changeActiveIndex()
}, 3000)

watch(isWindowFocused, (newFocus) => {
  newFocus ? resume() : pause()
}, { immediate: true })

onMounted(() => {
  resume()
})
</script>

<style lang="scss">
.ScrollingTitle {
  .animate-scrolling-leave-active,
  .animate-scrolling-enter-active {
    transition: transform .6s ease;
  }
}

// xl | lg | md | sm
// @screen md {}
</style>