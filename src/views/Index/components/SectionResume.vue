<template>
  <div class="SectionResume bg-([url(@/assets/img/Index/bg-wave-blue.png)] repeat-x) pt-60 -mt-60">
    <div class="pb-120 bg-[#D1ECEA]">
      <div class="text-(36 lake-200 center) leading-44 family-Bungee">
        RESUME HELPER
      </div>
      <h2 class="text-(20 gray-600 center) font-700">
        幫你做出好履歷
      </h2>
      <div class="layout-container overflow-hidden mt-24 bg-white rounded-16 shadow-card-gray">
        <div class="pt-24 text-gray-600 md:(flex items-center)">
          <div class="mx-16 md:(flex-none ml-40 mr-32 w-240)">
            <div class="text-20 font-700 md:text-24">
              多種履歷版型<span class="md:hidden">，</span><br class="hidden md:block">為你增加亮點
            </div>
            <div class="mt-4 text-base md:mt-24">
              自訂內容更多元的呈現自我
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <div
              v-if="loading"
              class="loading mt-16 h-358"
            ></div>
            <div v-else>
              <div class="flex items-center justify-end mx-16 mt-16 md:(ml-0 mr-40)">
                <a
                  :href="addQuery(profileUrl, moreUtm)"
                  target="_blank"
                  class="inline-flex items-center text-(14 gray-500) font-700 md:hover:text-orange-400"
                >更多履歷<i class="i-icon:arrow ml-4"></i></a>
              </div>
              <div class="overflow-x-scroll">
                <div class="flex gap-16 mt-16 mb-24 mx-16 float-left md:(mx-0 pr-40)">
                  <a
                    v-for="profileResume in profileResumeStore.list"
                    :key="profileResume.name"
                    :href="addQuery(profileResume.url, utm)"
                    target="_blank"
                    class="group flex-shrink-0 overflow-hidden w-272 rounded-8 border border-gray-300 md:hover:(shadow-card-gray) lg:w-352"
                  >
                    <div class="h-120">
                      <BaseImage
                        :src="profileResume.coverImage"
                        :alt="profileResume.name"
                        draggable="false"
                        class="object-cover w-full h-full"
                      ></BaseImage>
                    </div>
                    <div class="flex items-end px-16 h-56 border-(b gray-300)">
                      <div class="w-96 aspect-1 overflow-hidden rounded-1/2 mb-8">
                        <BaseImage
                          :src="profileResume.avatar"
                          :alt="profileResume.name"
                          draggable="false"
                          class="object-cover w-full h-full"
                        ></BaseImage>
                      </div>
                      <div class="ml-12 mt-4 mb-8 text-gray-600">
                        <div class="text-16 leading-24 font-700 line-clamp-1 md:group-hover:text-orange-400">
                          {{ profileResume.name }}
                        </div>
                        <div class="text-14 line-clamp-1">
                          {{ profileResume.jobTitle }}
                        </div>
                      </div>
                    </div>
                    <div class="p-16 pt-8">
                      <div class="text-(14 gray-600) line-clamp-2">
                        {{ profileResume.bio }}
                      </div>
                      <ul class="flex flex-wrap items-start gap-8 overflow-hidden mt-8 h-48">
                        <li
                          v-for="tag in profileResume.hashTags"
                          :key="tag"
                          class="px-8 text-(14 gray-500) font-700 bg-gray-200 rounded-8"
                        >{{ tag }}</li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-16 text-gray-600 bg-([#FFF1C1] op-60) md:(flex items-center gap-16 px-40)">
          <div class="text-(base gray-500) font-700 md:(flex-none w-32)">
            履歷工具
          </div>
          <div class="grid grid-cols-2 gap-16 mt-8 md:(flex-1 grid-cols-3 gap-0) xl:grid-cols-5">
            <a
              v-for="tool in toolList"
              :key="tool.name"
              :href="tool.link"
              target="_blank"
              class="group flex items-center gap-12 md:(gap-16 px-12 h-96 rounded-16) md:hover:bg-white"
            >
              <div class="flex items-center justify-center w-32 aspect-ratio-1 overflow-hidden rounded-1/2 bg-white border border-gray-200 md:w-48 md:group-hover:bg-orange-100">
                <BaseImage
                  :src="tool.icon"
                  :alt="tool.name"
                  draggable="false"
                  class="w-16 md:w-24"
                ></BaseImage>
              </div>
              <div>
                <div class="text-base font-700 md:group-hover:text-orange-400">
                  {{ tool.name }}
                </div>
                <div class="text-(12 gray-500) md:text-14">
                  {{ tool.slogan }}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ref, onMounted 
} from 'vue'
import { addQuery } from '@/utils/urlHandler.js'
import {
  profileUrl, resumeClinicUrl, blogUrl, meetUrl
} from '@/common/domainConfig.js'
import { useProfileResume } from '@/stores/ProfileResume.js'

const loading = ref(false)
const profileResumeStore = useProfileResume()

const utm = {
  utm_source: 'cweb_studentmainpage',
  utm_medium: 'university_toolbox'
}
const moreUtm = {
  utm_source: 'cweb_studentmainpage',
  utm_medium: 'university_toolbox_seemore'
}

const toolList = [
  {
    name: '履歷範本',
    slogan: '參考他人履歷',
    icon: new URL('../../../assets/img/Index/icons/icon-resume-example.svg', import.meta.url).href,
    link: addQuery(profileUrl, moreUtm)
  },
  {
    name: 'AI履歷健診',
    slogan: '一鍵分析找優化方向',
    icon: new URL('../../../assets/img/Index/icons/icon-resume-ai.svg', import.meta.url).href,
    link: addQuery(`${ resumeClinicUrl }analytics/`, utm)
  },
  {
    name: '真人履歷健診',
    slogan: '一對一免費線上健診',
    icon: new URL('../../../assets/img/Index/icons/icon-resume-check.svg', import.meta.url).href,
    link: addQuery(resumeClinicUrl, utm)
  },
  {
    name: '履歷面試教學',
    slogan: '豐富的履歷教學文章',
    icon: new URL('../../../assets/img/Index/icons/icon-resume-article.svg', import.meta.url).href,
    link: addQuery(`${ blogUrl }104blog-job-interview-toolkit/`, utm)
  },
  {
    name: '求職衝刺班',
    slogan: '履歷面試線上課程',
    icon: new URL('../../../assets/img/Index/icons/icon-resume-tutorial.svg', import.meta.url).href,
    link: addQuery(`${ meetUrl }event/5bf63c3c-445c-4030-9c3a-f1b1ec8c0f87`, utm)
  }
]

onMounted(async () => {
  await profileResumeStore.getList()
})
</script>

<style lang="scss">
.SectionResume {
}

// xl | lg | md | sm
// @screen xl {}
</style>