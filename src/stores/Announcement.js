import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import apiService from '@/apis/index.js'

export const useAnnouncement = (id = 'Announcement', pinia) => {
  return defineStore(id, () => {
    const _list = ref([])

    const loading = {
      getList: ref(false)
    }
  
    const list = computed(() => _list.value)

    const getList = async () => {
      loading.getList.value = true
      try {
        const result = await apiService.getCollegeNews()
        _list.value = result
        return result
      } finally {
        loading.getList.value = false
      }
    }
  
    return {
      loading,
      list,
      getList
    }
  })(pinia)
}