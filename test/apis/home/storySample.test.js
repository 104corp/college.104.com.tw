import { formatter } from '@/apis/home/storySample'
describe('formatter-data', () => {
  it('如果回應資料正確，應該回傳格式化後的物件', () => {
    const data = [
      {
        name: 'name',
        job: 'job',
        title: 'title',
        url: 'url',
        head: 'head',
        background: 'background'
      }
    ]

    const result = formatter.data(data)

    expect(result).toEqual([
      {
        author: {
          name: 'name',
          jobTitle: 'job',
          avatar: 'head'
        },
        title: 'title',
        cover: 'background',
        url: 'url'
      }  
    ])
  })

  it('如果資料為[]，應該回傳 []', () => {
    const result = formatter.data([])

    expect(result).toEqual([])
  })
})