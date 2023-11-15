import { createTestingPinia } from '@pinia/testing'
import { useProfilePortfolio } from '@/stores/ProfilePortfolio.js'
import apiService from '@/apis/index'

const pinia = createTestingPinia({ stubActions: false })
const store = useProfilePortfolio('ProfilePortfolio', pinia)

describe('ProfilePortfolio-function', () => {
  it('getList：執行api Service 並更新 store.list', async () => {
    store.list = undefined
    const spyService = vi.spyOn(apiService, 'getPortfolioSample').mockResolvedValue('formatted response')
    await store.getList()

    expect(store.list).toEqual('formatted response')
    expect(spyService).toHaveBeenCalled()
  })
})