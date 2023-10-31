import { createTestingPinia } from '@pinia/testing'
import { usePodcast } from '@/stores/Podcast'

const pinia = createTestingPinia()
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