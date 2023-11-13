import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import { mainUrl } from '@/common/domainConfig'
import apiService from '@/apis/index'

export const useJob = (id = 'Job', pinia) => {
  const _typeMap = ref({
    parttime: {
      name: '打工職缺',
      jobs: [],
      link: `${ mainUrl }jobs/main/students/?tab=parttime&ro=2`
    },
    intern: {
      name: '實習機會',
      jobs: [],
      link: `${ mainUrl }jobs/main/students/?tab=intern&ro=2&rostatus=1024`
    }
  })

  const currentType = ref('parttime')
  const _advertises = ref([])
  const _tags = ref([])

  const tags = computed(() => _tags.value)
  const advertises = computed(() => _advertises.value)
  const typeJobs = computed(() => _typeMap.value[currentType.value]?.jobs)
  const typeLink = computed(() => _typeMap.value[currentType.value]?.link)
  const listedType = computed(() => [ 'parttime', 'intern' ].map((type) => {
    return {
      id: type,
      text: _typeMap.value[type].name
    }
  }))

  const loading = {
    getAllJobs: ref(false),
    getTags: ref(false),
    getAdvertises: ref(false)
  }

  const getAllJobs = async () => {
    loading.getAllJobs.value = true
    try {
      const resultPt = await apiService.getPtJob()
      const resultIntern = await apiService.getInternJob()
      _typeMap.value.parttime.jobs = resultPt
      _typeMap.value.intern.jobs = resultIntern

      return {
        parttime: resultPt,
        intern: resultIntern
      }
    } finally {
      loading.getAllJobs.value = false
    }
  }

  const getAdvertises = async () => {
    loading.getAdvertises.value = true
    try {
      const result = await apiService.getJobAdvertise()
      _advertises.value = result
      return result
    } finally {
      loading.getAdvertises.value = false
    }
  }

  const getTags = async () => {
    loading.getTags.value = true
    try {
      const result = await apiService.getJobTags()
      _tags.value = result
      return result
    } finally {
      loading.getTags.value = false
    }
  }

  return defineStore(id, () => {
    return {
      currentType,
      tags,
      advertises,
      listedType,
      typeJobs,
      typeLink,
      loading,
      getAllJobs,
      getAdvertises,
      getTags
    }
  })(pinia)
}