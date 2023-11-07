<template>
  <div class="SectionFollowUs md:(pt-60 -mt-60 bg-([url(@/assets/img/Index/bg-wave-lake.png)] repeat-x))">
    <div class="py-40 bg-lake-200 md:(pt-0 pb-60)">
      <div class="text-(36 [#FFF1C1] center) leading-44 family-Bungee">
        FOLLOW US
      </div>
      <h2 class="text-(20 white center) font-700">
        關注動態
      </h2>
      <ul class="layout-container mt-16 px-16 py-4 bg-white rounded-16 md:(px-40 py-0)">
        <li class="py-16 md:py-24">
          <div
            v-if="loading"
            class="loading h-372 md:h-360"
          ></div>
          <div
            v-else-if="storeInstagram.channel104student"
            class="flex flex-col gap-12 mx-auto md:(flex-row items-center gap-32 max-w-1120)"
          >
            <ChannelInfo
              :image="storeInstagram.channel104student.image"
              :name="storeInstagram.channel104student.name"
              :description="storeInstagram.channel104student.description"
              :link="storeInstagram.channel104student.link"
              type="ig"
            ></ChannelInfo>
            <div class="min-w-0 flex-1">
              <div class="text-base font-700">
                最新貼文
              </div>
              <PostGallery
                :list="storeInstagram.channel104student.posts"
                class="mt-8"
              ></PostGallery>
            </div>
          </div>
        </li>
        <li class="py-16 border-(t gray-300) md:py-24">
          <div
            v-if="loading"
            class="loading h-422 md:h-360"
          ></div>
          <div
            v-else-if="storePodcast.channel104youth"
            class="flex flex-col gap-12 mx-auto md:(flex-row items-center gap-32 max-w-1120)"
          >
            <ChannelInfo
              :image="storePodcast.channel104youth.image"
              :name="storePodcast.channel104youth.name"
              :description="storePodcast.channel104youth.description"
              :link="storePodcast.channel104youth.link"
              type="podcast"
            ></ChannelInfo>
            <div class="min-w-0 flex-1">
              <div class="text-base font-700">
                最新單集
              </div>
              <PodcastEpisodes
                :list="storePodcast.channel104youth.episodes"
                class="mt-8"
              ></PodcastEpisodes>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {
  ref, onMounted 
} from 'vue'
import { useInstagram } from '@/stores/Instagram.js'
import { usePodcast } from '@/stores/Podcast.js'
import ChannelInfo from './ChannelInfo.vue'
import PostGallery from './PostGallery.vue'
import PodcastEpisodes from './PodcastEpisodes.vue'

const loading = ref(false)
const storeInstagram = useInstagram()
const storePodcast = usePodcast()

onMounted(async () => {
  await storeInstagram.getChannel104student()
  await storePodcast.getChannel104youth()
})
</script>

<style lang="scss">
.SectionFollowUs {
}

// xl | lg | md | sm
// @screen xl {}
</style>