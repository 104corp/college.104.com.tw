import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import apiService from '@/apis/index'

export const useJob = (id = 'Job', pinia) => {
  const _typeMap = ref({
    parttime: {
      name: '打工職缺',
      keyword: '打工',
      jobsource: 'college_pt',
      jobs: [],
      moreLink: ''
    },
    intern: {
      name: '實習機會',
      keyword: '實習',
      jobsource: 'college_intern',
      jobs: [],
      moreLink: ''
    }
  })

  const currentType = ref('parttime')
  const _advertises = ref([])
  const _tags = ref([])

  const tags = computed(() => _tags.value)
  const advertises = computed(() => _advertises.value)
  const typeJobs = computed(() => _typeMap.value[currentType.value]?.jobs)
  const typeJobSource = computed(() => _typeMap.value[currentType.value]?.jobsource)
  const typeName = computed(() => _typeMap.value[currentType.value]?.name)
  const typeMoreLink = computed(() => _typeMap.value[currentType.value]?.moreLink)
  const listedType = computed(() => [ 'parttime', 'intern' ].map((type) => {
    return {
      id: type,
      text: _typeMap.value[type].name
    }
  }))

  const loading = {
    getAllJobs: ref(true),
    getTags: ref(true),
    getAdvertises: ref(true)
  }

  const getAllJobs = async () => {
    loading.getAllJobs.value = true
    try {
      const resultPt = await apiService.getPtJob()
      const resultIntern = await apiService.getInternJob()

      _typeMap.value.parttime.jobs = resultPt.jobList
      _typeMap.value.parttime.moreLink = resultPt.moreLink

      _typeMap.value.intern.jobs = resultIntern.jobList
      _typeMap.value.intern.moreLink = resultIntern.moreLink

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
      typeJobSource,
      typeName,
      typeMoreLink,
      loading,
      getAllJobs,
      getAdvertises,
      getTags
    }
  })(pinia)
}