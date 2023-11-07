import { createTestingPinia } from '@pinia/testing'
import { useUser } from '@/stores/User.js'
import defaultAvatar from '@/assets/img/headDef.png'

const pinia = createTestingPinia()
const store = useUser('User', pinia)
describe('useUser', () => {
  it('如果 profile 為 null 或沒有 avatar，avatar 應該返回默認的頭像', () => {
    expect(store.avatar).toBe(defaultAvatar)
    store.profile = {
      firstName: 'John', familyName: 'Doe' 
    }
    expect(store.avatar).toBe(defaultAvatar)
  })

  it('如果 profile 不是物件，avatar 應該返回默認的頭像', () => {
    expect(store.avatar).toBe(defaultAvatar)
    store.profile = 'John Doe'
    expect(store.avatar).toBe(defaultAvatar)
  })

  it('如果 profile 是非空物件，isLogin 應該返回 true', () => {
    store.profile = {
      firstName: 'John', familyName: 'Doe' 
    }
    expect(store.isLogin).toBe(true)
  })

  it('如果 profile 是 null，isLogin 應該返回 false', () => {
    store.profile = null
    expect(store.isLogin).toBe(false)
  })
})