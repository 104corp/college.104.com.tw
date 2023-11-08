import { createTestingPinia } from '@pinia/testing'
import { useProfileResume } from '@/stores/ProfileResume.js'
import apiService from '@/apis/index'

const pinia = createTestingPinia({ stubActions: false })
const store = useProfileResume('ProfileResume', pinia)

describe('ProfileResume-function', () => {
  it('getList：執行api Service 並更新 store.list', async () => {
    store.list = undefined
    const spyService = vi.spyOn(apiService, 'getResumeSample').mockResolvedValue('formatted response')
    await store.getList()

    expect(store.list).toEqual('formatted response')
    expect(spyService).toHaveBeenCalled()
  })
})