import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import { giverUrl } from '@/common/domainConfig'

export const useQA = (id = 'QA') => {
  return defineStore(id, () => {
    const moreLink = `${ giverUrl }/questionList/0/tag/3wEeebVkeKqgd?orderType=latest&dn58=3wEeebVkeKqgd&tagType=0`
    const _list = ref([])
  
    const list = computed(() => _list.value)
    const getList = async () => {
      const result = [
        {
          question: 'How to use Pinia with Vue 3?',
          answerCount: 3,
          viewsCount: 10,
          answerAvatars: [ 'https://example.com/avatar1.png', 'https://example.com/avatar2.png', null ],
          link: 'https://stackoverflow.com/questions/123456/how-to-use-pinia-with-vue-3'
        },
        {
          question: 'What is the difference between let and const in JavaScript?',
          answerCount: 5,
          viewsCount: 20,
          answerAvatars: [ 'https://example.com/avatar3.png', 'https://example.com/avatar4.png', 'https://example.com/avatar5.png' ],
          link: 'https://stackoverflow.com/questions/234567/what-is-the-difference-between-let-and-const-in-javascript'
        },
        {
          question: 'How to sort an array in JavaScript?',
          answerCount: 8,
          viewsCount: 30,
          answerAvatars: [ 'https://example.com/avatar6.png', 'https://example.com/avatar7.png', 'https://example.com/avatar8.png' ],
          link: 'https://stackoverflow.com/questions/345678/how-to-sort-an-array-in-javascript'
        }
      ]

      _list.value = result

      return result
    }
  
    return {
      moreLink,
      list,
      getList
    }
  })()
}