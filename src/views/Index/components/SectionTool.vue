<template>
  <div
    class="SectionTool pb-92"
    md="pb-168"
  >
    <div class="mt-32 text-(36 lake-200 center) leading-44 family-Bungee">
      BEST TOOLS
    </div>
    <h2 class="text-(20 gray-600 center) font-700">
      大學生必用神器介紹
    </h2>
    <ToolShowcase :list="storeTool.tool"></ToolShowcase>
  </div>
</template>

<script setup>
import { } from 'vue'
import { useTool } from '@/stores/Tool.js'
import ToolShowcase from './ToolShowcase.vue'

const storeTool = useTool()
</script>

<style lang="scss">
.SectionTool {
}

// xl | lg | md | sm
// @screen md {}
</style>