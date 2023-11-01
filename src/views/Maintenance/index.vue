<template>
  <div class="Maintenance flex-1 pt-44 bg-white md:pt-94 md:pb-48 md:bg-gray-100">
    <div class="fixed top-0 flex items-center justify-center w-full h-44 bg-white border-b border-gray-200 md:justify-start md:h-70 md:shadow-0-2-8-0 md:shadow-color-gray-600-20">
      <a
        :href="mainUrl"
        class="layout-container md:w-full"
      >
        <img
          src="@/assets/img/logo.svg"
          alt="104人力銀行"
          draggable="false"
          class="w-116 md:w-180"
        >
      </a>
    </div>
    <div class="layout-container flex flex-col gap-40 items-center px-16 pt-64 bg-white md:flex-row md:justify-center md:gap-52 md:pt-0 md:h-472 md:border md:border-gray-200 md:rounded-4">
      <div class="w-162 md:w-370">
        <img
          src="@/assets/img/img_close.png"
          alt="封站中"
          draggable="false"
        >
      </div>
      <div class="text-center md:w-342">
        <div class="text-20 font-700 text-gray-600">
          拍勢！網站正在升級中
        </div>
        <div class="mt-4 text-14 text-gray-500">
          為提供更好的服務，我們正在進行更新作業；工程師們正在盡最大努力調整中，造成不便請多多包涵~
        </div>
        <div
          v-if="props.time"
          class="mt-16 text-14 text-red-200"
        >
          封站時間：{{ props.time }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { mainUrl } from '@/common/domainConfig.js'

const props = defineProps({
  time: {
    type: String,
    default: '',
  }
})
</script>

<style lang="scss">
.Maintenance {
}

// xl | lg | md | sm
// @screen xl {}
</style>