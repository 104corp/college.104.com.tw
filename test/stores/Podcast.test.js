import { createTestingPinia } from '@pinia/testing'
import { usePodcast } from '@/stores/Podcast'
import apiService from '@/apis'

const pinia = createTestingPinia({ stubActions: false })
const store = usePodcast('Podcast', pinia)

describe('computed - Podcast latestPost104youth', () => {
  it('當 episodes 為有效值時，需回傳第一筆資料', () => {
    store.channel104youth = {
      episodes: [
        {
          title: 'Episode 1',
          content: 'In this episode we talk about...',
          link: 'https://example.com/episode1',
          image: 'https://example.com/episode1.jpg',
          releaseDate: new Date('2022-01-01T00:00:00Z')
        },
        {
          title: 'Episode 2',
          content: 'In this episode we talk about...',
          link: 'https://example.com/episode2',
          image: 'https://example.com/episode2.jpg',
          releaseDate: new Date('2021-12-30T00:00:00Z')
        }
      ]
    }
    const result = {
      title: 'Episode 1',
      content: 'In this episode we talk about...',
      link: 'https://example.com/episode1',
      image: 'https://example.com/episode1.jpg',
      releaseDate: new Date('2022-01-01T00:00:00Z')
    }

    expect(store.latestPost104youth).toEqual(result)
  })

  it('當 channel104youth 為 null 時，需回傳 null', () => {
    store.channel104youth = null
    const result = null

    expect(store.latestPost104youth).toEqual(result)
  })

  it('當 episodes 為空時，需回傳 null', () => {
    store.channel104youth = {
      episodes: []
    }
    const result = null

    expect(store.latestPost104youth).toEqual(result)
  })

  it('當 episodes 為 null 時，需回傳 null', () => {
    store.channel104youth = {
      episodes: null
    }
    const result = null

    expect(store.latestPost104youth).toEqual(result)
  })

  it('當 episodes 只有一筆時，會回傳第一筆', () => {
    store.channel104youth = {
      episodes: [
        {
          title: 'Episode 1',
          content: 'In this episode we talk about...',
          link: 'https://example.com/episode1',
          image: 'https://example.com/episode1.jpg',
          releaseDate: new Date('2022-01-01T00:00:00Z')
        }
      ]
    }
    const result = {
      title: 'Episode 1',
      content: 'In this episode we talk about...',
      link: 'https://example.com/episode1',
      image: 'https://example.com/episode1.jpg',
      releaseDate: new Date('2022-01-01T00:00:00Z')
    }

    expect(store.latestPost104youth).toEqual(result)
  })
})

describe('Podcast - getChannel104youth', () => {
  it('執行api Service 並更新 store.channel104youth', async () => {
    store.channel104youth = undefined
    const spyService = vi.spyOn(apiService, 'getPodcastChannel').mockResolvedValue('formatted response')
    await store.getChannel104youth()

    expect(store.channel104youth).toEqual('formatted response')
    expect(spyService).toHaveBeenCalled()
  })

  it('forceRefresh為false, channel104youth有資料, 不執行api', async () => {
    store.channel104youth = 'some data'
    const spyService = vi.spyOn(apiService, 'getPodcastChannel').mockResolvedValue('formatted response')
    const result = await store.getChannel104youth({ forceRefresh: false })

    expect(result).toEqual('some data')
    expect(spyService).not.toHaveBeenCalled()
  })

  it('forceRefresh為true, channel104youth有資料, 執行api', async () => {
    store.channel104youth = 'some data'
    const spyService = vi.spyOn(apiService, 'getPodcastChannel').mockResolvedValue('formatted response')
    const result = await store.getChannel104youth({ forceRefresh: true })

    expect(result).toEqual('formatted response')
    expect(spyService).toHaveBeenCalled()
  })
})