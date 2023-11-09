<template>
  <div class="SectionGetHelp bg-([url(@/assets/img/Index/bg-wave-lake.png)] repeat-x) pt-60 -mt-60">
    <div class="bg-([url(@/assets/img/Index/bg-qa.png)] cover top repeat-y) pb-60 bg-lake-200">
      <div class="text-(36 [#FFF1C1] center) leading-44 family-Bungee md:pt-20">
        GET HELP
      </div>
      <h2 class="text-(20 white center) font-700">
        有職場疑問？我們為你解答
      </h2>
      <div
        v-if="QAStore.loading.getList"
        class="loading mt-24 h-328 md:h-372"
      ></div>
      <div
        v-else
        class="layout-container grid grid-cols-1 gap-y-8 mt-24 px-16 md:(grid-cols-2 gap-y-12 mt-32)"
      >
        <a
          v-for="qa in QAStore.list"
          :key="qa.question"
          :href="addQuery(qa.link, picUtm)"
          target="_blank"
          class="group flex gap-12 px-20 py-12 bg-white rounded-44 [&:nth-child(n+5)]:hidden md:(px-32 py-16 [&:nth-child(n+5)]:flex [&:nth-child(4n+1)]:mr-100 [&:nth-child(4n+2)]:mr-100 [&:nth-child(4n+3)]:ml-100 [&:nth-child(4n)]:ml-100)"
        >
          <div class="text-(44 [#D1ECEA]) leading-52 family-Bungee">Q</div>
          <div class="min-w-0">
            <div class="text-(16 gray-600) leading-24 font-700 line-clamp-1 md:group-hover:text-lake-200">
              {{ qa.question }}
            </div>
            <div class="flex items-center gap-4 flex-wrap mt-4">
              <ul class="flex">
                <li
                  v-for="avatar in qa.answerAvatars"
                  :key="avatar"
                  class="w-24 aspect-1 overflow-hidden border border-white rounded-1/2 [&:nth-child(n+2)]:-ml-8 [&:nth-child(1)]:z-3 [&:nth-child(2)]:z-2 [&:nth-child(3)]:z-1 [&:nth-child(n+4)]:hidden"
                >
                  <BaseImage
                    :src="avatar"
                    alt="頭貼"
                    draggable="false"
                    class="object-cover w-full h-full"
                  ></BaseImage>
                </li>
              </ul>
              <div class="text-(14 gray-500)">
                {{ qa.answerCount }} 回答<span class="ml-10">觀看 {{ qa.viewsCount }}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="flex justify-center mt-24">
        <a
          :href="addQuery(QAStore.moreLink, utm)"
          target="_blank"
          class="inline-block px-16 text-(base white) font-700 border border-white rounded-4 md:px-32"
        >更多職場問答</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { addQuery } from '@/utils/urlHandler.js'
import { useQA } from '@/stores/QA.js'

const QAStore = useQA()

const utm = {
  utm_source: 'cweb_studentmainpage',
  utm_medium: 'university_toolbox'
}
const picUtm = {
  utm_source: 'cweb_studentmainpage',
  utm_medium: 'university_toolbox_pic'
}

onMounted(async () => {
  await QAStore.getList()
})
</script>

<style lang="scss">
.SectionGetHelp {
}

// xl | lg | md | sm
@screen md {
  .SectionGetHelp {
    .layout-container {
      a:hover {
        box-shadow: 0px 2px 16px 0px rgba(0, 122, 129, .8);
      }
    }
  }
}
</style>