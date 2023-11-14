import { formatter } from '@/apis/home/keywords'
describe('formatter-data', () => {
  it('如果回應資料正確，應該回傳格式化後的物件', () => {
    const data = [
      {
        type: 'type',
        keywords: 'keywords',
        link: 'link'
      }
    ]

    const result = formatter.list(data)

    expect(result).toEqual([
      {
        name: 'keywords',
        url: 'link',
        type: 'type'
      }
    ])
  })

  it('如果資料為[]，應該回傳 []', () => {
    const result = formatter.list([])

    expect(result).toEqual([])
  })
})