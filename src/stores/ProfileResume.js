import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import { profileUrl } from '@/common/domainConfig'

export const useProfileResume = (id = 'ProfileResume') => {
  return defineStore(id, () => {
    const moreLink = `${ profileUrl }/`
    const _list = ref([])
  
    const list = computed(() => _list.value)
    const getList = async () => {
      const result = [
        {
          name: 'John Doe',
          jobTitle: 'Software Engineer',
          avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
          coverImage: 'https://picsum.photos/id/237/200/300',
          bio: 'I am a software engineer with 5 years of experience in web development.',
          hashTags: [ 'javascript', 'vue', 'nodejs' ],
          url: 'https://johndoe.com'
        },
        {
          name: 'Jane Smith',
          jobTitle: 'Frontend Developer',
          avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
          coverImage: 'https://picsum.photos/id/238/200/300',
          bio: 'I am a frontend developer with a passion for creating beautiful and responsive web applications.',
          hashTags: [ 'react', 'css', 'html' ],
          url: 'https://janesmith.com'
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