import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'

export const useInstagram = (id = 'Instagram', pinia) => {
  return defineStore(id, () => {
    const _channel104student = ref(null)
  
    const channel104student = computed(() => _channel104student.value)
    const latestPost104student = computed(() => {
      const posts = channel104student.value?.posts
      return posts?.length > 0 ? posts[0] : null
    })

    const getChannel104student = async () => {
      const result = {
        name: 'Channel 104 Student',
        description: 'This is a student-run channel that provides information and updates about the school.',
        link: 'https://www.instagram.com/channel104student/',
        image: 'https://www.example.com/channel104student.jpg',
        posts: [
          {
            content: 'Check out our latest post about the upcoming school event!',
            image: 'https://www.example.com/post1.jpg',
            link: 'https://www.instagram.com/p/1234567890/'
          },
          {
            content: 'Don\'t forget to submit your assignments on time!',
            image: '',
            link: 'https://www.instagram.com/p/0987654321/'
          }
        ]
      }

      _channel104student.value = result

      return result
    }
  
    return {
      channel104student,
      latestPost104student,
      getChannel104student
    }
  })(pinia)
}