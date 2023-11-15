import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import { giverUrl } from '@/common/domainConfig'
import apiService from '@/apis/index.js'

export const useQA = (id = 'QA', pinia) => {
  return defineStore(id, () => {
    const moreLink = `${ giverUrl }questionList/0/tag/3wEeebVkeKqgd?orderType=latest&dn58=3wEeebVkeKqgd&tagType=0`
    const _list = ref([])

    const loading = {
      getList: ref(true)
    }
  
    const list = computed(() => _list.value)

    const getList = async () => {
      loading.getList.value = true
      try {
        const result = await apiService.getGiverQaList()
        _list.value = result
        return result
      } finally {
        loading.getList.value = false
      }
    }
  
    return {
      moreLink,
      loading,
      list,
      getList
    }
  })(pinia)
}