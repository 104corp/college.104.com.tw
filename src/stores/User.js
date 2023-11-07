import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import defaultAvatar from '@/assets/img/headDef.png'
import { beCollegeUrl } from '@/common/domainConfig'
import apiService from '@/apis/index.js'

export const useUser = (id = 'User', pinia) => {
  const _profile = ref(null)
  const loading = {
    getProfile: ref(false)
  }

  const loginUrl = `${ beCollegeUrl }auth/login`
  const logoutUrl = `${ beCollegeUrl }auth/logout`
 
  const profile = computed(() => _profile.value)
  const avatar = computed(() => _profile.value?.avatar ?? defaultAvatar)
  const isLogin = computed(() => profile.value !== null)
  const getProfile = async () => {
    loading.getProfile.value = true
    try {
      const result = await apiService.getProfile()
      _profile.value = result
      return result
    } finally {
      loading.getProfile.value = false
    }
  }
  return defineStore(id, () => {
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