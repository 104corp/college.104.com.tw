<template>
  <div
    class="SideBar top-44 sticky p-8 z-40 bg-[#fafafa] md:(fixed bg-white p-16 top-1/2 left-0 w-120 -translate-y-1/2 hover:w-120) transition-[width] duration-200"
    :class="{ 'md:w-48': scrollY > 20 }"
  >
    <ul class="layout-container overflow-x-scroll flex gap-8 mx-auto text-gray-500 md:flex-col">
      <button
        v-for="button in buttons"
        :key="button.text"
        class="group flex items-center px-8 py-4 text-14 border border-gray-200 rounded-14 md:(gap-4 p-0 h-20 bg-transparent border-none) md:hover:(text-orange-400 font-700)"
        :class=" button.active ? 'font-700 text-white bg-orange-300 md:(text-orange-400 bg-transparent)': 'bg-white'"
        :data-gtm-index="`側欄錨點-${button.text}`"
        @click="scrollTo(button.anchorTop)"
      >
        <span
          class="hidden flex-shrink-0 m-4 w-8 h-8 rounded-full bg-gray-500 md:(block group-hover:bg-orange-400)"
          :class="{ 'bg-orange-400': button.active }"
        ></span>
        <p class="flex-shrink-0 text-left whitespace-no-wrap md:w-68">
          {{ button.text }}
        </p>
      </button>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const props = defineProps({
  list: {
    type: Array,
    default: () => ([
      {
        text: String,
        anchorTop: Number
      }
    ])
  }
})

const { y: scrollY } = useWindowScroll()

const buttons = computed(() => {
  return props.list.map((el, index) => {
    const currentAnchorTop = el.anchorTop
    const nextAnchorTop = props.list[index + 1]?.anchorTop ?? Infinity
    const isActive = currentAnchorTop <= 0 && nextAnchorTop > 0
    return {
      ...el,
      active: isActive
    }
  })
})

const scrollTo = (anchorTop) => {
  window.scrollTo({
    top: scrollY.value + anchorTop,
    left: 0,
    behavior: 'smooth'
  })
}
</script>

<style lang="scss">
.SideBar {
}

@screen md {
  .SideBar {
    border-radius: 0 16px 16px 0;
    box-shadow: 0 2px 24px 0 rgba(135, 135, 135, .4);
  }
}
</style>