import { formatter } from '@/apis/home/careerOpportunities'
describe('formatter-data', () => {
  it('如果回應資料正確，應該回傳格式化後的物件', () => {
    const data = [ [
      {
        url: 'url',
        picUrl: 'picUrl'
      }
    ], [
      {
        url: 'url',
        picUrl: 'picUrl'
      }
    ] ]

    const result = formatter.list(data)

    expect(result).toEqual([
      {
        link: 'url',
        image: 'picUrl'
      },
      {
        link: 'url',
        image: 'picUrl'
      }
    ])
  })

  it('如果資料為[]，應該回傳 []', () => {
    const result = formatter.list([])

    expect(result).toEqual([])
  })
})