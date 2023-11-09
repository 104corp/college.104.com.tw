import { createTestingPinia } from '@pinia/testing'
import { useQA } from '@/stores/QA.js'
import apiService from '@/apis'

const pinia = createTestingPinia({ stubActions: false })
const store = useQA('QA', pinia)

describe('QA-function', () => {
  it('getList：執行api Service 並更新 store.list', async () => {
    store.list = undefined
    const spyService = vi.spyOn(apiService, 'getGiverQaList').mockResolvedValue('formatted response')
    await store.getList()

    expect(store.list).toEqual('formatted response')
    expect(spyService).toHaveBeenCalled()
  })
})