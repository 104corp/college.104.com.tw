import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import { profileUrl } from '@/common/domainConfig'

export const useProfilePortfolio = (id = 'ProfilePortfolio') => {
  return defineStore(id, () => {
    const moreLink = `${ profileUrl }/portfolio`
    const _list = ref([])
  
    const list = computed(() => _list.value)
    const getList = async () => {
      const result = [
        {
          author: {
            name: 'John Doe',
            jobTitle: 'Web Developer',
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
          },
          title: 'My Awesome Project',
          cover: 'https://picsum.photos/800/600',
          url: 'https://example.com/my-awesome-project'
        },
        {
          author: {
            name: 'Jane Smith',
            jobTitle: 'UI Designer',
            avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
          },
          title: 'Designing the Future',
          cover: 'https://picsum.photos/800/600',
          url: 'https://example.com/designing-the-future'
        }
      ]

      _list.value = result

      return result
    }
  
    return {
      moreLink,
      list,
      getList
    }
  })()
}