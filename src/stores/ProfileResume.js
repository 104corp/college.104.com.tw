import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import { profileUrl } from '@/common/domainConfig'

export const useProfileResume = (id = 'ProfileResume', pinia) => {
  return defineStore(id, () => {
    const moreLink = profileUrl
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
        },
        {
          name: 'Bob Johnson',
          jobTitle: 'Full Stack Developer',
          avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
          coverImage: 'https://picsum.photos/id/239/200/300',
          bio: 'I am a full stack developer with experience in both frontend and backend development.',
          hashTags: [ 'javascript', 'react', 'nodejs', 'mongodb' ],
          url: 'https://bobjohnson.com'
        },
        {
          name: 'Alice Lee',
          jobTitle: 'Backend Developer',
          avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
          coverImage: 'https://picsum.photos/id/240/200/300',
          bio: 'I am a backend developer with experience in building scalable and secure web applications.',
          hashTags: [ 'nodejs', 'mongodb', 'aws' ],
          url: 'https://alicelee.com'
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