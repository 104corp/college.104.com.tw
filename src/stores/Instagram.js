import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import apiService from '@/apis/index.js'

export const useInstagram = (id = 'Instagram', pinia) => {
  return defineStore(id, () => {
    const _channel104student = ref(null)
  
    const channel104student = computed(() => _channel104student.value)
    const latestPost104student = computed(() => {
      const posts = channel104student.value?.posts
      return posts?.length > 0 ? posts[0] : null
    })

    const loading = {
      getChannel104student: ref(true)
    }

    const getChannel104student = async ({ forceRefresh = false } = {}) => {
      if (!forceRefresh && channel104student.value !== null) {
        return channel104student.value
      }

      loading.getChannel104student.value = true
      try {
        const result = await apiService.getIgChannel('college')
        _channel104student.value = result
        return result
      } finally {
        loading.getChannel104student.value = false
      }
    }
  
    return {
      channel104student,
      latestPost104student,
      loading,
      getChannel104student
    }
  })(pinia)
}