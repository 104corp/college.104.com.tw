import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'

export const useAnnouncement = (id = 'Announcement', pinia) => {
  return defineStore(id, () => {
    const _list = ref([])
  
    const list = computed(() => _list.value)
    const getList = async () => {
      const result = [
        {
          type: 'announcement',
          title: 'New feature released!',
          url: 'https://example.com/new-feature'
        },
        {
          type: 'update',
          title: 'Important security update',
          url: null
        },
        {
          type: 'announcement',
          title: 'Holiday sale starts now',
          url: 'https://example.com/holiday-sale'
        }
      ]

      _list.value = result

      return result
    }
  
    return {
      list,
      getList
    }
  })(pinia)
}