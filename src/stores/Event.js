import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'

export const useEvent = (id = 'Event', pinia) => {
  return defineStore(id, () => {
    const _list = ref([])
  
    const list = computed(() => _list.value)
    const latestPost = computed(() => {
      return list.value?.length > 0 ? list.value[0] : null
    })

    const getList = async () => {
      const result = [
        {
          title: 'Event 1',
          description: 'This is the first event',
          link: 'https://example.com/event1',
          image: 'https://example.com/event1.jpg'
        },
        {
          title: 'Event 2',
          description: 'This is the second event',
          link: 'https://example.com/event2',
          image: 'https://example.com/event2.jpg'
        },
        {
          title: 'Event 3',
          description: 'This is the third event',
          link: 'https://example.com/event3',
          image: 'https://example.com/event3.jpg'
        }
      ]

      _list.value = result

      return result
    }
  
    return {
      list,
      latestPost,
      getList
    }
  })(pinia)
}