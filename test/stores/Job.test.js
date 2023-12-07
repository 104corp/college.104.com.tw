import { createTestingPinia } from '@pinia/testing'
import { useJob } from '@/stores/Job.js'
import apiService from '@/apis'

const pinia = createTestingPinia({ stubActions: false })
const store = useJob('Job', pinia)

describe('Job - function', () => {
  it('getAllJobs：執行api Service 並且 computed-typeJobs 數值正確', async () => {
    store.channel104student = undefined
    const spyServiceIntern = vi.spyOn(apiService, 'getInternJob').mockResolvedValue({
      jobList: 'formatted intern jobList',
      moreLink: 'formatted intern moreLink'
    })
    const spyServicePt = vi.spyOn(apiService, 'getPtJob').mockResolvedValue({
      jobList: 'formatted pt jobList',
      moreLink: 'formatted pt moreLink'
    })
    await store.getAllJobs()

    expect(spyServiceIntern).toHaveBeenCalled()
    expect(spyServicePt).toHaveBeenCalled()
    
    store.currentType = 'parttime'
    expect(store.typeJobs).toEqual('formatted pt jobList')
    expect(store.typeMoreLink).toEqual('formatted pt moreLink')
    
    store.currentType = 'intern'
    expect(store.typeJobs).toEqual('formatted intern jobList')
    expect(store.typeMoreLink).toEqual('formatted intern moreLink')
  })

  it('getTags：執行api Service 並更新 store.tags', async () => {
    store.tags = undefined
    const spyService = vi.spyOn(apiService, 'getJobTags').mockResolvedValue('formatted response')
    await store.getTags()

    expect(spyService).toHaveBeenCalled()
    expect(store.tags).toEqual('formatted response')
  })

  it('getAdvertises：執行api Service 並更新 store.advertises', async () => {
    store.advertises = undefined
    const spyService = vi.spyOn(apiService, 'getJobAdvertise').mockResolvedValue('formatted response')
    await store.getAdvertises()

    expect(spyService).toHaveBeenCalled()
    expect(store.advertises).toEqual('formatted response')
  })
})