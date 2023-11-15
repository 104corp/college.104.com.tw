import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import apiService from '@/apis/index.js'

export const usePodcast = (id = 'Podcast', pinia) => {
  return defineStore(id, () => {
    const _channel104youth = ref(null)
  
    const channel104youth = computed(() => _channel104youth.value)
    const latestPost104youth = computed(() => {
      const episodes = channel104youth.value?.episodes
      return episodes?.length > 0 ? episodes[0] : null
    })

    const loading = {
      getChannel104youth: ref(true)
    }
  
    const getChannel104youth = async ({ forceRefresh = false } = {}) => {
      if (!forceRefresh && channel104youth.value !== null) {
        return channel104youth.value 
      }

      loading.getChannel104youth.value = true
      try {
        const result = await apiService.getPodcastChannel()
        _channel104youth.value = result
        return result
      } finally {
        loading.getChannel104youth.value = false
      }
    }
  
    return {
      channel104youth,
      latestPost104youth,
      loading,
      getChannel104youth
    }
  })(pinia)
}