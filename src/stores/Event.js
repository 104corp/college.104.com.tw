import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import apiService from '@/apis/index.js'

export const useEvent = (id = 'Event', pinia) => {
  return defineStore(id, () => {
    const _list = ref([])
  
    const list = computed(() => _list.value)
    const latestPost = computed(() => {
      return list.value?.length > 0 ? list.value[0] : null
    })

    const loading = {
      getList: ref(true)
    }

    const getList = async () => {
      loading.getList.value = true
      try {
        const result = await apiService.getEventList()
        _list.value = result
        return result
      } finally {
        loading.getList.value = false
      }
    }
  
    return {
      list,
      latestPost,
      loading,
      getList
    }
  })(pinia)
}