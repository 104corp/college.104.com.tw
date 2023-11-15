import { createTestingPinia } from '@pinia/testing'
import { useInstagram } from '@/stores/Instagram'
import apiService from '@/apis'

const pinia = createTestingPinia({ stubActions: false })
const store = useInstagram('Instagram', pinia)

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

describe('Instagram - getChannel104student', () => {
  it('執行api Service 並更新 store.channel104student', async () => {
    store.channel104student = undefined
    const spyService = vi.spyOn(apiService, 'getIgChannel').mockResolvedValue('formatted response')
    await store.getChannel104student()

    expect(store.channel104student).toEqual('formatted response')
    expect(spyService).toHaveBeenCalled()
  })

  it('forceRefresh為false, channel104student有資料, 不執行api', async () => {
    store.channel104student = 'some data'
    const spyService = vi.spyOn(apiService, 'getIgChannel').mockResolvedValue('formatted response')
    const result = await store.getChannel104student({ forceRefresh: false })

    expect(result).toEqual('some data')
    expect(spyService).not.toHaveBeenCalled()
  })

  it('forceRefresh為true, channel104student有資料, 執行api', async () => {
    store.channel104student = 'some data'
    const spyService = vi.spyOn(apiService, 'getIgChannel').mockResolvedValue('formatted response')
    const result = await store.getChannel104student({ forceRefresh: true })

    expect(result).toEqual('formatted response')
    expect(spyService).toHaveBeenCalled()
  })
})