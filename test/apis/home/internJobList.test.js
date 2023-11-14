import { formatter } from '@/apis/home/internJobList'
describe('formatter-data', () => {
  it('如果回應資料正確，應該回傳格式化後的物件', () => {
    const data = {
      jobList: [
        {
          jobName: 'jobName',
          addresNoDesc: 'addresNoDesc',
          salaryDesc: 'salaryDesc',
          link: 'link'
        }
      ]
    }

    const result = formatter.data(data)

    expect(result).toEqual([ {
      title: 'jobName',
      salary: 'salaryDesc',
      area: 'addresNoDesc',
      link: 'link'
    } ])
  })

  it('如果jobList為[]，應該回傳 []', () => {
    const result = formatter.data({ jobList: [] })

    expect(result).toEqual([])
  })
})