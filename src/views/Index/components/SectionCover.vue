<template>
  <div
    class="SectionCover pt-20 pb-12"
    md="pt-32 pb-0"
  >
    <ScrollingTitle
      prefix="大學生"
      :main-word="titleList"
    ></ScrollingTitle>
    <ScrollingAnnouncement
      class="mx-12 mt-12"
      md="mt-16"
      :list="storeAnnouncement.list"
    ></ScrollingAnnouncement>
    <div class="Index__job mt-16">
      <div class="layout-container mx-auto">
        <div class="py-16 bg-white rounded-16 shadow-card-gray md:py-24">
          <div class="flex items-center gap-12 mx-16 md:(gap-24 mx-32)">
            <div class="flex-1 flex items-center h-44 border border-orange-400 rounded-4">
              <div class="p-12 w-1/2">
                <input
                  type="text"
                  placeholder="工作關鍵字"
                  maxLength="100"
                  class="w-full text-14 focus:outline-none caret-orange-400"
                >
              </div>
              <button class="flex items-center gap-12 pr-12 py-12 w-1/2">
                <span class="w-1 h-12 bg-gray-400"></span>
                <span class="flex-1 text-(14 gray-400 left nowrap)">地區</span>
                <i class="i-icon:arrow text-gray-400 transform rotate-90"></i>
              </button>
            </div>
            <a
              href=""
              target="_blank"
              class="btn btn-primary px-12 py-10 md:px-77"
            >搜尋</a>
          </div>
          <div class="flex gap-8 mt-12 px-16 overflow-x-scroll w-full h-26 md:px-32">
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-lake-200"
            >短期現領</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-lake-200"
            >假日工讀</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-lake-200"
            >彈性打工</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-lake-200"
            >飲料手搖</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-lake-200"
            >適合學生</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-green-200"
            >自由安排時間</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-green-200"
            >遠端打工</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-green-200"
            >內外場兼職</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-green-200"
            >門市銷售菁英</a>
            <a
              href=""
              target="_blank"
              class="flex-none tag-primary-green-200"
            >自由安排時間</a>
          </div>
          <div class="mx-16 mt-16 md:(flex gap-28 mx-32 mt-28)">
            <div class="flex-1 pt-12 bg-[#F1F9F8] rounded-8 md:w-434 lg:w-auto">
              <div class="flex items-center justify-between px-12">
                <div class="rounded-24 bg-white border border-gray-200">
                  <button class="px-16 py-8 text-(14 white) font-700 bg-lake-200 rounded-24 md:py-4">
                    打工職缺
                  </button>
                  <button class="px-16 py-8 text-(14 gray-500) font-700 rounded-24 md:(py-4 hover:text-lake-200)">
                    實習機會
                  </button>
                </div>
                <a
                  href=""
                  target="_blank"
                  class="inline-flex items-center text-(14 gray-500) font-700 md:hover:text-orange-400"
                >更多<i class="i-icon:arrow ml-4"></i></a>
              </div>
              <div class="overflow-x-scroll px-12 pt-8 pb-12">
                <div class="min-w-676">
                  <div
                    v-if="false"
                    class="loading mt-8 h-164"
                  ></div>
                  <div
                    v-else
                    class="grid grid-cols-3 gap-8"
                  >
                    <a
                      v-for="n in 6"
                      :key="n"
                      href=""
                      target="_blank"
                      class="Index__job__card p-8 w-full h-78 bg-white border border-gray-200 rounded-8 md:hover:(shadow-card-gray)"
                    >
                      <div class="h-40 text-(14 blue-200) font-700 line-clamp-2">
                        [日商] 咖樂迪咖啡農場 京站 小碧潭店 門市兼職人員 _時薪176元～180元(歡迎學生打工、二度就業!!)強力招募中!!
                      </div>
                      <div class="flex gap-8 mt-4 text-12 font-700">
                        <div class="text-gray-500">
                          新北市新店區
                        </div>
                        <div class="text-orange-400">
                          時薪176~180元
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden md:(grid grid-cols-2 grid-rows-2 gap-12 w-396 h-224)">
              <a
                href=""
                target="_blank"
              >
                <img
                  src="@/assets/img/default-img.png"
                  alt="無經驗可"
                  draggable="false"
                  class="object-cover w-full h-full rounded-8"
                >
              </a>
              <a
                href=""
                target="_blank"
              >
                <img
                  src="@/assets/img/default-img.png"
                  alt="暑期打工"
                  draggable="false"
                  class="object-cover w-full h-full rounded-8"
                >
              </a>
              <a
                href=""
                target="_blank"
              >
                <img
                  src="@/assets/img/default-img.png"
                  alt="時間彈性"
                  draggable="false"
                  class="object-cover w-full h-full rounded-8"
                >
              </a>
              <a
                href=""
                target="_blank"
              >
                <img
                  src="@/assets/img/default-img.png"
                  alt="短期任務"
                  draggable="false"
                  class="object-cover w-full h-full rounded-8"
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="layout-container flex gap-12 overflow-x-scroll mx-auto p-16"
      md="gap-20 overflow-auto justify-center mt-12 px-0 py-16"
    >
      <CardEvent
        :is-loading="false"
        type-name="活動"
        :title="storeEvent.latestPost?.title"
        :content="storeEvent.latestPost?.description"
        :link="addQuery(storeEvent.latestPost?.link, utm)"
        more-text="更多活動"
        :more-link="addQuery(meetUrl, utm)"
        :image="storeEvent.latestPost?.image"
        :data-gtm-index="`活動板位-${storeEvent.latestPost?.title}`"
      ></CardEvent>
      <CardEvent
        :is-loading="false"
        type-name="IG"
        :title="storeInstagram.latestPost104student?.content"
        :content="''"
        :link="addQuery(storeInstagram.latestPost104student?.link, utm)"
        more-text="看所有貼文"
        more-link="https://instagram.com/104student?igshid=NTc4MTIwNjQ2YQ=="
        :image="storeInstagram.latestPost104student?.image"
        data-gtm-index="活動板位-IG"
      ></CardEvent>
      <CardEvent
        :is-loading="false"
        type-name="播客"
        :title="storePodcast.latestPost104youth?.title"
        :content="storePodcast.latestPost104youth?.content"
        :link="addQuery(storePodcast.latestPost104youth?.link, utm)"
        more-text="聽所有單集"
        :more-link="addQuery(`${blogUrl}category/podcast/104youth/`, utm)"
        :image="storePodcast.latestPost104youth?.image"
        :data-gtm-index="`活動板位-${storePodcast.latestPost104youth?.title}`"
      ></CardEvent>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAnnouncement } from '@/stores/Announcement.js'
import { useEvent } from '@/stores/Event.js'
import { useInstagram } from '@/stores/Instagram.js'
import { usePodcast } from '@/stores/Podcast.js'
import { addQuery } from '@/utils/urlHandler.js'
import {
  meetUrl, blogUrl 
} from '@/common/domainConfig.js'
import ScrollingTitle from './ScrollingTitle.vue'
import ScrollingAnnouncement from './ScrollingAnnouncement.vue'
import CardEvent from './CardEvent.vue'

const storeAnnouncement = useAnnouncement()
const storeEvent = useEvent()
const storeInstagram = useInstagram()
const storePodcast = usePodcast()

const titleList = [
  '打工實習',
  '接軌求職',
  '製作履歷'
]

const utm = {
  utm_source: 'cweb_studentmainpage',
  utm_medium: 'university_activity'
}

onMounted(async () => {
  await storeAnnouncement.getList()
  await storeEvent.getList()
  await storeInstagram.getChannel104student()
  await storePodcast.getChannel104youth()
})
</script>

<style lang="scss">
.SectionCover {
}

// xl | lg | md | sm
// @screen xl {}
</style>