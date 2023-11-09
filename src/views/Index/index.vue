<template>
  <div class="Index text-(16 gray-600)">
    <GlobalHeader></GlobalHeader>
    <NavBar></NavBar>
    <SectionCover></SectionCover>
    <SideBar
      :list="sectionList"
    ></SideBar>
    <div
      ref="$anchor_bestTool"
      class="-top-90 relative md:top-unset"
    ></div>
    <SectionTool></SectionTool>
    <div
      ref="$anchor_resumeHelper"
      class="-top-90 relative md:top-unset"
    ></div>
    <SectionResume></SectionResume>
    <SectionStories></SectionStories>
    <div
      ref="$anchor_getHelp"
      class="-top-90 relative md:top-unset"
    ></div>
    <SectionGetHelp></SectionGetHelp>
    <div
      ref="$anchor_news"
      class="-top-90 relative md:top-unset"
    ></div>
    <SectionArticle></SectionArticle>
    <SectionFollowUs></SectionFollowUs>
    <GoTop></GoTop>
  </div>
</template>

<script setup>
import {
  ref, computed 
} from 'vue'
import { useHead } from '@vueuse/head'
import { useElementBounding } from '@vueuse/core'
import { collegeUrl } from '@/common/domainConfig.js'
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
import SectionCover from './components/SectionCover.vue'
import SectionResume from './components/SectionResume.vue'
import SectionGetHelp from './components/SectionGetHelp.vue'
import SectionTool from './components/SectionTool.vue'
import SectionArticle from './components/SectionArticle.vue'
import SectionFollowUs from './components/SectionFollowUs.vue'
import SectionStories from './components/SectionStories.vue'

useHead({
  title: '104Campus－大學生涯、打工、實習入口',
  meta: [
    {
      name: 'description',
      content: '104Campus是一個提供大學生打工兼職、未來發展職涯準備的平台。想要找兼職、打工或實習的同學，系統會推薦適合的打工和實習機會；或用搜尋找到符合條件的兼職工作或實習。想探索職涯的同學，可以透過探索服務去找到自己有興趣或個性適合的工作；對於職涯或職場技能有疑問不知道怎麼準備，也可以看看履歷範本，或在職涯診所發問或去證照中心找到需要的證照資訊。104Campus提供了一個統整你需要的服務平台。'
    },
    {
      property: 'og:title',
      content: '104Campus－大學生涯、打工、實習入口'
    },
    {
      property: 'og:description',
      content: '104Campus是一個提供大學生打工兼職、未來發展職涯準備的平台。想要找兼職、打工或實習的同學，系統會推薦適合的打工和實習機會；或用搜尋找到符合條件的兼職工作或實習。想探索職涯的同學，可以透過探索服務去找到自己有興趣或個性適合的工作；對於職涯或職場技能有疑問不知道怎麼準備，也可以看看履歷範本，或在職涯診所發問或去證照中心找到需要的證照資訊。104Campus提供了一個統整你需要的服務平台。'
    },
    {
      property: 'og:image',
      content: new URL('../../assets/img/og-college.png', import.meta.url).href
    },
    {
      property: 'og:url',
      content: collegeUrl
    },
    {
      property: 'og:site_name',
      content: '104Campus－大學生涯、打工、實習入口'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: collegeUrl
    }
  ]
})

const $anchor_bestTool = ref(null)
const $anchor_resumeHelper = ref(null)
const $anchor_getHelp = ref(null)
const $anchor_news = ref(null)

const { top: bestToolsTop } = useElementBounding($anchor_bestTool)
const { top: resumeHelperTop } = useElementBounding($anchor_resumeHelper)
const { top: getHelpTop } = useElementBounding($anchor_getHelp)
const { top: newsTop } = useElementBounding($anchor_news)

const sectionList = computed(() => [
  {
    text: '工具介紹',
    anchorTop: bestToolsTop.value
  },
  {
    text: '履歷幫手',
    anchorTop: resumeHelperTop.value
  },
  {
    text: '職場問答',
    anchorTop: getHelpTop.value
  },
  {
    text: '產業新訊',
    anchorTop: newsTop.value
  }
])
</script>

<style lang="scss">
.Index {
  background-image: url('@/assets/img/Index/bg-top.png'), linear-gradient(#d1ecea, #d1ecea), url('@/assets/img/Index/bg-deco.png');
  background-position: top 100px center, top 100px center, top 100px center;
  background-repeat: no-repeat, no-repeat, repeat-y;
  background-size: auto 225px, 100% 542px, 100% auto;

  .overflow-x-scroll {
    &::-webkit-scrollbar {
      --at-apply: 'hidden';
    }
  }
}

// xl | lg | md | sm
@screen md {
  .Index {
    background-size: auto 225px, 100% 630px, 100% auto;
  }
}

@screen xl {
  .Index {
    background-size: 100% 225px, 100% 630px, 100% auto;
  }
}
</style>