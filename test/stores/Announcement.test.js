import { createTestingPinia } from '@pinia/testing'
import { useAnnouncement } from '@/stores/Announcement.js'
import apiService from '@/apis'

const pinia = createTestingPinia({ stubActions: false })
const store = useAnnouncement('Announcement', pinia)

describe('Announcement-function', () => {
  it('getList：執行api Service 並更新 store.list', async () => {
    store.list = undefined
    const spyService = vi.spyOn(apiService, 'getCollegeNews').mockResolvedValue('formatted response')
    await store.getList()

    expect(store.list).toEqual('formatted response')
    expect(spyService).toHaveBeenCalled()
  })
})