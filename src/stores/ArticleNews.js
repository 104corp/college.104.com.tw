import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import apiService from '@/apis/index.js'
import { blogUrl } from '@/common/domainConfig'

export const useArticleNews = (id = 'ArticleNews', pinia) => {
  return defineStore(id, () => {
    const moreLink = `${ blogUrl }category/topic/`
    const _list = ref([])
    const list = computed(() => _list.value)
    
    const loading = {
      getList: ref(false)
    }

    const getList = async () => {
      loading.getList.value = true
      try {
        const result = await apiService.getArticle()
        _list.value = result
        return result
      } finally {
        loading.getList.value = false
      }
    }
  
    return {
      moreLink,
      list,
      loading,
      getList
    }
  })(pinia)
}