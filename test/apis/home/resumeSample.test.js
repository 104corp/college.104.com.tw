import { formatter } from '@/apis/home/ResumeSample'
describe('formatter-data', () => {
  it('如果回應資料正確，應該回傳格式化後的物件', () => {
    const data = [
      {
        name: 'name',
        job: 'job',
        instruction: 'instruction',
        tags: [
          'tag'
        ],
        url: 'url',
        head: 'head',
        background: 'background'
      }
    ]

    const result = formatter.data(data)

    expect(result).toEqual([ {
      name: 'name',
      jobTitle: 'job',
      avatar: 'head',
      coverImage: 'background',
      bio: 'instruction',
      hashTags: [ 'tag' ],
      url: 'url'
    } ])
  })

  it('如果資料為[]，應該回傳 []', () => {
    const result = formatter.data([])

    expect(result).toEqual([])
  })
})