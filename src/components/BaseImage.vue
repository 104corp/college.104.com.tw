<template>
  <img
    class="BaseImage"
    :src="imageSrc"
    :alt="alt"
    draggable="false"
    @error="useDefault"
  >
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  assetPath: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  defaultSrc: {
    type: String,
    default: new URL('../assets/img/default-img.png', import.meta.url).href
  }
})

const imageSrc = computed(() => {
  return props.src || new URL(`../assets/${ props.assetPath }`, import.meta.url).href
})

const useDefault = (e) => {
  e.currentTarget.src = props.defaultSrc
}
</script>

<style lang="scss">
.BaseImage {
}

// xl | lg | md | sm
// @screen xl {}
</style>