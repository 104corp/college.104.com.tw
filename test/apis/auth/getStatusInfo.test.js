import { formatter } from '@/apis/auth/getStatusInfo'
describe('formatter-profile', () => {
  it('如果回應資料正確，應該回傳正確的物件', () => {
    const data = {
      userProfile: {
        familyName: 'Doe', firstName: 'John', avatar: 'avatar' 
      } 
    }

    const result = formatter.profile(data)

    expect(result).toEqual({
      familyName: 'Doe',
      firstName: 'John',
      avatar: 'data:image/jpeg;base64,avatar'
    })
  })

  it('如果回應資料缺少部分資料，應該回傳預設的物件', () => {
    const data = {
      userProfile: {
        familyName: null, firstName: null, avatar: null
      } 
    }

    const result = formatter.profile(data)

    expect(result).toEqual({
      familyName: '',
      firstName: '',
      avatar: null
    })
  })

  it('如果資料中不存在 userProfile 屬性，應該回傳 null', () => {
    const data = {}

    const result = formatter.profile(data)

    expect(result).toBeNull()
  })
})