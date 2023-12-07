import { createTestingPinia } from '@pinia/testing'
import { useEvent } from '@/stores/Event'
import apiService from '@/apis/index'

const pinia = createTestingPinia({ stubActions: false })
const store = useEvent('Event', pinia)

describe('computed - Event latestPost', () => {
  it('當 list 為有效值且長度大於1時，需回傳第一筆資料', () => {
    store.list = [
      {
        title: 'Event 1',
        description: 'This is the first event',
        link: 'https://example.com/event1',
        image: 'https://example.com/event1.jpg'
      },
      {
        title: 'Event 2',
        description: 'This is the second event',
        link: 'https://example.com/event2',
        image: 'https://example.com/event2.jpg'
      },
      {
        title: 'Event 3',
        description: 'This is the third event',
        link: 'https://example.com/event3',
        image: 'https://example.com/event3.jpg'
      }
    ]
    const result = {
      title: 'Event 1',
      description: 'This is the first event',
      link: 'https://example.com/event1',
      image: 'https://example.com/event1.jpg'
    }

    expect(store.latestPost).toEqual(result)
  })

  it('當 list 為空時，會回傳 null', () => {
    store.list = []
    const result = null

    expect(store.latestPost).toEqual(result)
  })

  it('當 list 為 null 時，會回傳 null', () => {
    store.list = null
    const result = null

    expect(store.latestPost).toEqual(result)
  })

  it('當 list 只有一筆時，會回傳第一筆', () => {
    store.list = [
      {
        title: 'Event 1',
        description: 'This is the first event',
        link: 'https://example.com/event1',
        image: 'https://example.com/event1.jpg'
      }
    ]
    const result = {
      title: 'Event 1',
      description: 'This is the first event',
      link: 'https://example.com/event1',
      image: 'https://example.com/event1.jpg'
    }

    expect(store.latestPost).toEqual(result)
  })
})

describe('Event - function', () => {
  it('getList：執行api Service 並更新 store.list', async () => {
    store.list = undefined
    const spyService = vi.spyOn(apiService, 'getEventList').mockResolvedValue('formatted response')
    await store.getList()

    expect(store.list).toEqual('formatted response')
    expect(spyService).toHaveBeenCalled()
  })
})