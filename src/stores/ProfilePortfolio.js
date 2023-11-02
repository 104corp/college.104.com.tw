import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import { profileUrl } from '@/common/domainConfig'

export const useProfilePortfolio = (id = 'ProfilePortfolio', pinia) => {
  return defineStore(id, () => {
    const moreLink = `${ profileUrl }portfolio`
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
          cover: 'https://picsum.photos/200/600',
          url: 'https://example.com/designing-the-future'
        },
        {
          author: {
            name: 'Bob Johnson',
            jobTitle: 'Software Engineer',
            avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
          },
          title: 'Building the Next Big Thing',
          cover: 'https://picsum.photos/1000/600',
          url: 'https://example.com/building-the-next-big-thing'
        },
        {
          author: {
            name: 'Alice Lee',
            jobTitle: 'Product Manager',
            avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
          },
          title: 'Creating a Better User Experience',
          cover: 'https://picsum.photos/900/600',
          url: 'https://example.com/creating-a-better-user-experience'
        },
        {
          author: {
            name: 'David Kim',
            jobTitle: 'Data Scientist',
            avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
          },
          title: 'Analyzing Big Data',
          cover: 'https://picsum.photos/100/600',
          url: 'https://example.com/analyzing-big-data'
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
  })(pinia)
}