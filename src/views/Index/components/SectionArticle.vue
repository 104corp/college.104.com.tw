<template>
  <div class="SectionArticle py-40 bg-white md:pb-120">
    <div class="text-(36 lake-200 center) leading-44 family-Bungee">
      NEWS
    </div>
    <h2 class="text-(20 gray-600 center) font-700">
      產業新訊
    </h2>
    <div class="layout-container relative mx-auto mt-20 px-16 md:(mt-32 px-0)">
      <div
        v-if="loading"
        class="loading w-full h-860 md:h-415"
      ></div>
      <ArticleGallery
        v-else
        :list="currentArticles"
        category-name="專題特輯"
      ></ArticleGallery>
    </div>
    <div class="flex justify-center mt-24 md:mt-32">
      <a
        :href="addQuery(storeArticleNews.moreLink, moreUtm)"
        target="_blank"
        class="inline-block px-16 text-(base lake-200) font-700 border border-lake-200 rounded-4 md:px-32"
      >更多產業新訊</a>
    </div>
  </div>
</template>

<script setup>
import {
  ref, computed, onMounted 
} from 'vue'
import { addQuery } from '@/utils/urlHandler.js'
import { useArticleNews } from '@/stores/ArticleNews.js'
import ArticleGallery from './ArticleGallery.vue'

const picUtm = {
  utm_source: 'cweb_studentmainpage',
  utm_medium: 'university_toolbox_pic',
}
const moreUtm = {
  utm_source: 'cweb_studentmainpage',
  utm_medium: 'university_toolbox_seemore',
}

const loading = ref(false)
const storeArticleNews = useArticleNews()

const currentArticles = computed(() => {
  return storeArticleNews.list.map((article) => {
    return {
      ...article,
      link: addQuery(article.link, picUtm)
    }
  })
})

onMounted(async () => {
  await storeArticleNews.getList()
})
</script>

<style lang="scss">
.SectionArticle {
}

// xl | lg | md | sm
// @screen xl {}
</style>