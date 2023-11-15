import { formatter } from '@/apis/home/giverQaList'
describe('formatter-data', () => {
  it('如果回應資料正確，應該回傳格式化後的物件', () => {
    const data = [
      {
        question: 'question',
        viewCount: 'viewCount',
        answerCount: 'answerCount',
        answerHead: [
          'answerHead'
        ],
        link: 'link'
      }
    ]

    const result = formatter.data(data)

    expect(result).toEqual([ {
      question: 'question',
      viewsCount: 'viewCount',
      answerCount: 'answerCount',
      answerAvatars: [ 'answerHead' ],
      link: 'link'
    } ])
  })

  it('如果資料為[]，應該回傳 []', () => {
    const result = formatter.data([])

    expect(result).toEqual([])
  })
})