import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import defaultAvatar from '@/assets/img/headDef.png'
import { beCollegeUrl } from '@/common/domainConfig'

export const useUser = (id = 'User', pinia) => {
  return defineStore(id, () => {
    const _profile = ref(null)
    const loading = {
      getProfile: ref(false)
    }

    const loginUrl = `${ beCollegeUrl }auth/login`
    const logoutUrl = `${ beCollegeUrl }auth/logout`
 
    const profile = computed(() => _profile.value)
    const avatar = computed(() => {
      if (_profile.value && _profile.value.avatar) {
        return _profile.value.avatar
      } else {
        return defaultAvatar
      }
    })
    const isLogin = computed(() => {
      if (profile.value === null) {
        return false
      } else {
        return true
      }
    })
    const getProfile = async () => {
      const result = {
        familyName: 'Doe',
        firstName: 'John',
        avatar: defaultAvatar
      }

      _profile.value = result

      return result
    }

    return {
      profile,
      avatar,
      isLogin,
      loginUrl,
      logoutUrl,
      loading,
      getProfile
    }
  })(pinia)
}