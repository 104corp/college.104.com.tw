import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import { profileUrl } from '@/common/domainConfig'
import apiService from '@/apis/index.js'
    
export const useProfilePortfolio = (id = 'ProfilePortfolio', pinia) => {
  return defineStore(id, () => {
    const moreLink = `${ profileUrl }portfolio`
    const _list = ref([])
  
    const loading = {
      getList: ref(false)
    }
    const list = computed(() => _list.value)
    const getList = async () => {
      loading.getList.value = true
      try {
        const result = await apiService.getPortfolioSample()
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