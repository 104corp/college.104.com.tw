<template>
  <button
    v-show="y > visibleAtY"
    class="GoTop group w-56 h-56 rounded-1/2 shadow-button-gray bg-white fixed flex items-center justify-center z-9 bottom-36 right-12 print:hidden"
    md="w-72 h-72 bottom-70 rounded-4"
    @click="goTop()"
  >
    <i 
      i-icon="go-top md:go-top-filled?mask"
      class="text-24 text-gray-500 md:group-hover:text-orange-400"
    ></i>
  </button>
</template>
  
<script setup>
import { useWindowScroll } from '@vueuse/core'

defineProps({
  visibleAtY: {
    type: Number,
    default: 100
  }
})

const { y } = useWindowScroll()
const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
    
<style lang="scss">
.GoTop {
}
</style>