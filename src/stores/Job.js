import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import { mainUrl } from '@/common/domainConfig'

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

  const getAllJobs = async () => {
    const result = [
      {
        title: 'Software Engineer',
        salary: '120k',
        area: 'San Francisco',
        link: 'https://example.com/job1'
      },
      {
        title: 'Data Analyst',
        salary: '80k',
        area: 'New York',
        link: 'https://example.com/job2'
      },
      {
        title: '[日商] 咖樂迪咖啡農場 京站 小碧潭店 門市兼職人員 _時薪176元～180元(歡迎學生打工、二度就業!!)強力招募中!!',
        salary: '時薪176~180元',
        area: '新北市新店區',
        link: 'https://example.com/job2'
      },
      {
        title: '網頁設計師',
        salary: '月薪 40,000 至 60,000 元',
        area: '台北市信義區',
        link: 'https://example.com/job8'
      }
    ]

    _typeMap.value.parttime.jobs = result
    _typeMap.value.intern.jobs = result

    return result
  }

  const getAdvertises = async () => {
    const result = [
      {
        image: 'https://picsum.photos/104/100',
        link: 'https://example.com/link1'
      },
      {
        image: 'https://picsum.photos/104/200',
        link: 'https://example.com/link2'
      },
      {
        image: 'https://picsum.photos/104/300',
        link: 'https://example.com/link3'
      },
      {
        image: 'https://picsum.photos/104/400',
        link: 'https://example.com/link4'
      }
    ]

    _advertises.value = result

    return result
  }

  const getTags = async () => {
    const result = [
      {
        name: 'tag1',
        url: 'https://example.com/tag1',
        type: 'parttime'
      },
      {
        name: 'tag2',
        url: 'https://example.com/tag2',
        type: 'intern'
      }
    ]

    _tags.value = result

    return result
  }

  return defineStore(id, () => {
    return {
      currentType,
      tags,
      advertises,
      listedType,
      typeJobs,
      typeLink,
      getAllJobs,
      getAdvertises,
      getTags
    }
  })(pinia)
}