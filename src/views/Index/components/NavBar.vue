<template>
  <div class="NavBar bg-white border-b border-gray-300 ">
    <div class="flex mx-auto md:max-w-480">
      <a
        v-for="link in links"
        :key="link.name"
        :href="addQuery(link.url, props.utm)"
        target="_blank"
        class="flex-1 py-12 text-16 leading-28 font-700 text-center"
        :class="{ 'text-orange-400 border-b-4 border-orange-400': link.name === activeName }"
      >{{ link.name }}</a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { addQuery } from '@/utils/urlHandler.js'
import {
  studentUrl, collegeUrl, mainUrl 
} from '@/common/domainConfig.js'
const links = [
  {
    name: '高中職',
    url: studentUrl
  },
  {
    name: '大學生',
    url: collegeUrl
  },
  {
    name: '新鮮人',
    url: `${ mainUrl }jobs/main/freshman`
  }
]

const activeName = computed(() => {
  const currentDomain = window.location.hostname
  return links.find(link => new URL(link.url).hostname === currentDomain)?.name
})

const props = defineProps({
  utm: {
    type: Object,
    default: () => {
      return {
        utm_source: 'cweb_studentmainpage',
        utm_medium: 'university_tabswitching'
      }
    }
  }
})
</script>

<style lang="scss">
.NavBar {
}
</style>