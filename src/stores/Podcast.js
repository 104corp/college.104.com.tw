import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'

export const usePodcast = (id = 'Podcast', pinia) => {
  return defineStore(id, () => {
    const _channel104youth = ref(null)
  
    const channel104youth = computed(() => _channel104youth.value)
    const latestPost104youth = computed(() => {
      const episodes = channel104youth.value?.episodes
      return episodes?.length > 0 ? episodes[0] : null
    })
  
    const getChannel104youth = async () => {
      const result = {
        name: 'My Podcast',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at imperdiet nibh. Sed luctus orci quis nibh elementum congue. Curabitur bibendum lectus nec diam consequat hendrerit. Aliquam commodo eros orci, ut posuere urna dictum eget. Etiam nec consectetur elit. Curabitur ornare enim leo, ac laoreet nibh cursus a. Curabitur tincidunt.',
        link: 'https://example.com',
        image: 'https://picsum.photos/550/600',
        episodes: [
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at imperdiet nibh. Sed luctus orci quis nibh elementum congue. Curabitur bibendum lectus nec diam consequat hendrerit. Aliquam commodo eros orci, ut posuere urna dictum eget. Etiam nec consectetur elit. Curabitur ornare enim leo, ac laoreet nibh cursus a. Curabitur tincidunt.',
            content: 'In this episode we talk about...',
            link: 'https://example.com/episode1',
            image: 'https://picsum.photos/870/600',
            releaseDate: 1699327684
          },
          {
            title: 'Episode 2',
            content: 'In this episode we talk about...',
            link: 'https://example.com/episode2',
            image: 'https://picsum.photos/890/600',
            releaseDate: 1699327684
          },
          {
            title: 'Episode 3',
            content: 'In this episode we talk about...',
            link: 'https://example.com/episode2',
            image: 'https://picsum.photos/898/600',
            releaseDate: 1699327684
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
  })(pinia)
}