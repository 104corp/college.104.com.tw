import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'

export const usePodcast = () => {
  return defineStore('Podcast', () => {
    const _channel104youth = ref(null)
  
    const channel104youth = computed(() => _channel104youth.value)
    const latestPost104youth = computed(() => {
      const episodes = channel104youth.value?.episodes
      return episodes?.length > 0 ? episodes[0] : null
    })
  
    const getChannel104youth = async () => {
      const result = {
        name: 'My Podcast',
        description: 'This is a podcast about...',
        link: 'https://example.com',
        image: 'https://example.com/image.jpg',
        episodes: [
          {
            title: 'Episode 1',
            content: 'In this episode we talk about...',
            link: 'https://example.com/episode1',
            image: 'https://example.com/episode1.jpg',
            releaseDate: new Date('2022-01-01T00:00:00Z')
          },
          {
            title: 'Episode 2',
            content: 'In this episode we talk about...',
            link: 'https://example.com/episode2',
            image: 'https://example.com/episode2.jpg',
            releaseDate: new Date('2021-12-30T00:00:00Z')
          }
        ]
      }

      _channel104youth.value = result

      return result
    }
  
    return {
      channel104youth,
      latestPost104youth,
      getChannel104youth
    }
  })()
}