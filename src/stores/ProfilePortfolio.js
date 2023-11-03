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
        },
        {
          author: {
            name: 'Emily Chen',
            jobTitle: 'Frontend Developer',
            avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
          },
          title: 'Building a Responsive Website',
          cover: 'https://picsum.photos/800/600',
          url: 'https://example.com/building-a-responsive-website'
        },
        {
          author: {
            name: 'Michael Brown',
            jobTitle: 'Backend Developer',
            avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
          },
          title: 'Scaling a Web Application',
          cover: 'https://picsum.photos/1200/600',
          url: 'https://example.com/scaling-a-web-application'
        },
        {
          author: {
            name: 'Olivia Davis',
            jobTitle: 'UX Designer',
            avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
          },
          title: 'Designing for Accessibility',
          cover: 'https://picsum.photos/600/600',
          url: 'https://example.com/designing-for-accessibility'
        },
        {
          author: {
            name: 'William Garcia',
            jobTitle: 'Full Stack Developer',
            avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
          },
          title: 'Creating a RESTful API',
          cover: 'https://picsum.photos/700/600',
          url: 'https://example.com/creating-a-restful-api'
        },
        {
          author: {
            name: 'Sophia Hernandez',
            jobTitle: 'UI/UX Designer',
            avatar: 'https://randomuser.me/api/portraits/women/5.jpg'
          },
          title: 'Designing a Mobile App',
          cover: 'https://picsum.photos/500/600',
          url: 'https://example.com/designing-a-mobile-app'
        },
        {
          author: {
            name: 'James Lee',
            jobTitle: 'Software Engineer',
            avatar: 'https://randomuser.me/api/portraits/men/6.jpg'
          },
          title: 'Building a Machine Learning Model',
          cover: 'https://picsum.photos/900/600',
          url: 'https://example.com/building-a-machine-learning-model'
        },
        {
          author: {
            name: 'Ava Martinez',
            jobTitle: 'Frontend Developer',
            avatar: 'https://randomuser.me/api/portraits/women/6.jpg'
          },
          title: 'Creating a Single Page Application',
          cover: 'https://picsum.photos/1000/600',
          url: 'https://example.com/creating-a-single-page-application'
        },
        {
          author: {
            name: 'Ethan Nguyen',
            jobTitle: 'Full Stack Developer',
            avatar: 'https://randomuser.me/api/portraits/men/7.jpg'
          },
          title: 'Building a Real-Time Chat Application',
          cover: 'https://picsum.photos/800/600',
          url: 'https://example.com/building-a-real-time-chat-application'
        },
        {
          author: {
            name: 'Isabella Perez',
            jobTitle: 'UI Designer',
            avatar: 'https://randomuser.me/api/portraits/women/7.jpg'
          },
          title: 'Designing a Landing Page',
          cover: 'https://picsum.photos/600/600',
          url: 'https://example.com/designing-a-landing-page'
        },
        {
          author: {
            name: 'Daniel Rodriguez',
            jobTitle: 'Backend Developer',
            avatar: 'https://randomuser.me/api/portraits/men/8.jpg'
          },
          title: 'Optimizing Database Performance',
          cover: 'https://picsum.photos/1200/600',
          url: 'https://example.com/optimizing-database-performance'
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