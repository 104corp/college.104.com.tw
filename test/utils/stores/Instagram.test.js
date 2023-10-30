import { createTestingPinia } from '@pinia/testing'
import { useInstagram } from '@/stores/Instagram'

const pinia = createTestingPinia()
const store = useInstagram(pinia)

describe('computed - Instagram latestPost104student', () => {
  it('當 posts 為有效值時，需回傳第一筆資料', () => {
    store.channel104student = {
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
    const result = {
      content: 'Check out our latest post about the upcoming school event!',
      image: 'https://www.example.com/post1.jpg',
      link: 'https://www.instagram.com/p/1234567890/'
    }

    expect(store.latestPost104student).toEqual(result)
  })

  it('當 channel104student 為 null 時，需回傳 null', () => {
    store.channel104student = null
    const result = null

    expect(store.latestPost104student).toEqual(result)
  })

  it('當 posts 為空時，需回傳 null', () => {
    store.channel104student = {
      posts: []
    }
    const result = null

    expect(store.latestPost104student).toEqual(result)
  })

  it('當 posts 為 null 時，需回傳 null', () => {
    store.channel104student = {
      posts: null
    }
    const result = null

    expect(store.latestPost104student).toEqual(result)
  })

  it('當 posts 只有一筆時，會回傳第一筆', () => {
    store.channel104student = {
      posts: [
        {
          content: 'Check out our latest post about the upcoming school event!',
          image: 'https://www.example.com/post1.jpg',
          link: 'https://www.instagram.com/p/1234567890/'
        }
      ]
    }
    const result = {
      content: 'Check out our latest post about the upcoming school event!',
      image: 'https://www.example.com/post1.jpg',
      link: 'https://www.instagram.com/p/1234567890/'
    }

    expect(store.latestPost104student).toEqual(result)
  })
})