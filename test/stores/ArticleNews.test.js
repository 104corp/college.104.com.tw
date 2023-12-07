import { createTestingPinia } from '@pinia/testing'
import { useArticleNews } from '@/stores/ArticleNews.js'
import apiService from '@/apis'

const pinia = createTestingPinia({ stubActions: false })
const store = useArticleNews('ArticleNews', pinia)

describe('ArticleNews-function', () => {
  it('getList：執行api Service 並更新 store.list', async () => {
    store.list = undefined
    const spyService = vi.spyOn(apiService, 'getArticle').mockResolvedValue('formatted response')
    await store.getList()

    expect(store.list).toEqual('formatted response')
    expect(spyService).toHaveBeenCalled()
  })
})