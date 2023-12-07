import { formatter } from '@/apis/home/partTimeJobList'
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
      ],
      moreLink: 'moreLink'
    }
    
    const result = formatter.data(data)
    
    expect(result).toEqual(
      {
        jobList: [
          {
            title: 'jobName',
            salary: 'salaryDesc',
            area: 'addresNoDesc',
            link: 'link'
          }
        ],
        moreLink: 'moreLink'
      })
  })

  it('如果jobList為[]，應該回傳 []', () => {
    const result = formatter.data({
      jobList: [], 
      moreLink: 'moreLink' 
    })

    expect(result).toEqual({
      jobList: [], 
      moreLink: 'moreLink' 
    })
  })
})