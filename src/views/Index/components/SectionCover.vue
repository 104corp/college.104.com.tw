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
      :is-loading="storeAnnouncement.loading.getList"
    ></ScrollingAnnouncement>
    <div class="mt-16">
      <div class="layout-container mx-auto">
        <div
          class="py-16 bg-white rounded-16 shadow-card-gray"
          md="py-24"
        >
          <div
            class="flex items-center gap-12 mx-16"
            md="gap-24 mx-32"
          >
            <div class="flex-1 flex items-center h-44 border border-orange-400 rounded-4">
              <div class="relative flex items-center p-12 w-1/2">
                <input
                  v-model="keyword"
                  type="text"
                  placeholder="工作關鍵字"
                  maxLength="100"
                  class="w-full text-14 focus:outline-none caret-orange-400"
                >
                <button
                  v-show="keyword"
                  class="i-icon:plus absolute right-12 text-(16 gray-600) transform rotate-45"
                  @click="keyword = ''"
                ></button>
              </div>
              <button
                class="relative flex items-center gap-12 pl-12 pr-40 py-12 w-1/2 text-(14 left) before:(content-empty absolute left-0 w-1 h-12 bg-gray-400)"
                @click="openCategoryPicker"
              >
                <span
                  v-if="area?.length > 0"
                  class="line-clamp-1"
                >
                  {{ selectedArea }}
                </span>
                <span
                  v-else
                  class="text-gray-400 text-nowrap"
                >地區</span>
                <i class="i-icon:arrow absolute right-12 text-gray-400 transform rotate-90"></i>
              </button>
            </div>
            <a
              :href="searchLink"
              target="_blank"
              class="btn btn-primary px-12 py-10"
              md="px-77"
            >搜尋</a>
          </div>
          <div
            v-if="storeJob.tags?.length > 0"
            class="flex gap-8 mt-12 px-16 overflow-x-scroll w-full h-26"
            md="px-32"
          >
            <a
              v-for="tag in storeJob.tags"
              :key="tag.name"
              :href="tag.url"
              target="_blank"
              :data-gtm-index="`關鍵字-${ tag.type === 'parttime' ? '藍色' : '綠色' }-${ tag.name }`"
              class="flex-shrink-0"
              :class="{ 'tag-primary-lake-200': tag.type === 'parttime',
                        'tag-primary-green-200': tag.type === 'intern' }"
            >{{ tag.name }}</a>
          </div>
          <div
            class="mx-16 mt-16"
            md="flex gap-28 mx-32 mt-28"
          >
            <div
              class="flex-1 pt-12 bg-[#F1F9F8] rounded-8"
              md="min-w-434"
              lg="w-auto"
            >
              <div class="flex items-center justify-between px-12">
                <div class="rounded-24 bg-white border border-gray-200">
                  <button
                    v-for="typeBtn in storeJob.listedType"
                    :key="typeBtn.id"
                    class="px-16 py-8 text-14 font-700 rounded-24"
                    md="py-4"
                    :class="{ 'text-white bg-lake-200': typeBtn.id === storeJob.currentType,
                              'text-gray-500 md:hover:text-lake-200': typeBtn.id !== storeJob.currentType }"
                    @click="changeJobType(typeBtn.id)"
                  >
                    {{ typeBtn.text }}
                  </button>
                </div>
                <a
                  :href="moreLink"
                  target="_blank"
                  class="inline-flex items-center text-(14 gray-500) font-700"
                  md="hover:text-orange-400"
                >更多<i class="i-icon:arrow ml-4"></i></a>
              </div>
              <div class="overflow-x-scroll px-12 pt-8 pb-12">
                <div
                  v-if="storeJob.loading.getAllJobs"
                  class="loading h-164"
                ></div>
                <div
                  v-else
                  class="min-w-676"
                >
                  <div
                    v-if="storeJob.typeJobs?.length > 0"
                    class="grid grid-cols-3 gap-8"
                  >
                    <a
                      v-for="(job, index) in storeJob.typeJobs"
                      :key="job.link"
                      :href="job.link"
                      target="_blank"
                      :data-gtm-index="`推薦職缺-${ storeJob.currentType === 'parttime' ? '打工職缺' : '實習機會' }${ index + 1 }`"
                      class="p-8 w-full h-78 bg-white border border-gray-200 rounded-8 [&:nth-child(n+7)]:hidden"
                      md="hover:shadow-card-gray"
                    >
                      <div class="h-40 text-(14 blue-200) font-700 line-clamp-2">
                        {{ job.title }}
                      </div>
                      <div class="mt-4 min-w-0 text-12 font-700 text-gray-500 line-clamp-1">
                        <span>{{ job.area }}</span>
                        <span class="ml-8 text-orange-400">
                          {{ job.salary }}
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="storeJob.advertises?.length > 0"
              class="hidden"
              md="grid grid-cols-2 grid-rows-2 gap-12 w-396 h-224"
            >
              <a
                v-for="advertise in storeJob.advertises"
                :key="advertise.link"
                :href="advertise.link"
                target="_blank"
                class="[&:nth-child(n+5)]:hidden"
              >
                <BaseImage
                  :src="advertise.image"
                  class="object-cover w-full h-full rounded-8"
                ></BaseImage>
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
        :is-loading="storeEvent.loading.getList"
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
        :is-loading="storeInstagram.loading.getChannel104student"
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
        :is-loading="storePodcast.loading.getChannel104youth"
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
import {
  onMounted, computed, ref
} from 'vue'
import { useAnnouncement } from '@/stores/Announcement.js'
import { useJob } from '@/stores/Job.js'
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
const storeJob = useJob()
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

const keyword = ref('')
const area = ref([])
const selectedArea = computed(() => {
  return area.value.map((item) => item.des).join('、')
})

const searchLink = computed(() => {
  const queries = {
    keyword: `${ keyword.value }`,
    area: `${ area.value.map((item) => item.no).join(',') }`,
    jobsource: `college_${ storeJob.currentType }_btn`,
    utm_source: 'cweb_studentmainpage',
    utm_medium: `${ storeJob.currentType }_keyword`
  }
  return addQuery(storeJob.typeLink, queries)
})
const moreLink = computed(() => {
  const queries = {
    jobsource: `college_${ storeJob.currentType }`,
    utm_source: 'cweb_studentmainpage',
    utm_medium: 'university_partime_seemore',
  }
  return addQuery(storeJob.typeLink, queries)
})

const openCategoryPicker = () => {
  window.categoryPicker.open({
    dataSource: 'Area',
    theme: 'customer-theme',
    maxSelectedNumber: 10,
    selectedItems: area.value.map((item) => ({ no: item.no })),
    onSubmit: async (value) => {
      area.value = value.selectedItems
    }
  })
}

const changeJobType = (type) => {
  storeJob.currentType = type
}

const getAnnouncement = async () => {
  await storeAnnouncement.getList()
}

const getJob = async () => {
  await storeJob.getAllJobs()
  await storeJob.getAdvertises()
  await storeJob.getTags()
}

const getActivities = async () => {
  await storeEvent.getList()
  await storeInstagram.getChannel104student()
  await storePodcast.getChannel104youth()
}

onMounted(async () => {
  await getAnnouncement()
  await getJob()
  await getActivities()
})
</script>

<style lang="scss">
.SectionCover {
}

// xl | lg | md | sm
// @screen xl {}
</style>