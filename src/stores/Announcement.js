import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import apiService from '@/apis/index.js'

export const useAnnouncement = (id = 'Announcement', pinia) => {
  return defineStore(id, () => {
    const _list = ref([ 
      {
        type: '',
        title: '大學生頁 【打工兼職】打工賺生活費&零用錢💰短期、彈性排班、無經驗可',
        link: 'https://tanji.104.com.tw/list/?utm_source=cweb_studentmainpage&utm_medium=university_newsbar'
      } 
    ])

    const loading = {
      getList: ref(true)
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