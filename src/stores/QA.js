import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import { giverUrl } from '@/common/domainConfig'

export const useQA = (id = 'QA', pinia) => {
  return defineStore(id, () => {
    const moreLink = `${ giverUrl }questionList/0/tag/3wEeebVkeKqgd?orderType=latest&dn58=3wEeebVkeKqgd&tagType=0`
    const _list = ref([])
  
    const list = computed(() => _list.value)
    const getList = async () => {
      const result = [
        {
          question: 'How to use Pinia with Vue 3?',
          answerCount: 3,
          viewsCount: 10,
          answerAvatars: [
            'https://i.pravatar.cc/150?img=1',
            'https://i.pravatar.cc/150?img=2',
            'https://i.pravatar.cc/150?img=3'
          ],
          link: 'https://stackoverflow.com/questions/123456/how-to-use-pinia-with-vue-3'
        },
        {
          question: 'What is the difference between let and const in JavaScript?',
          answerCount: 5,
          viewsCount: 20,
          answerAvatars: [
            'https://i.pravatar.cc/150?img=4',
            'https://i.pravatar.cc/150?img=5',
            'https://i.pravatar.cc/150?img=6'
          ],
          link: 'https://stackoverflow.com/questions/234567/what-is-the-difference-between-let-and-const-in-javascript'
        },
        {
          question: 'How to sort an array in JavaScript?',
          answerCount: 8,
          viewsCount: 30,
          answerAvatars: [
            'https://i.pravatar.cc/150?img=7',
            'https://i.pravatar.cc/150?img=8',
            'https://i.pravatar.cc/150?img=9'
          ],
          link: 'https://stackoverflow.com/questions/345678/how-to-sort-an-array-in-javascript'
        },
        {
          question: 'How to use async/await in JavaScript?',
          answerCount: 12,
          viewsCount: 40,
          answerAvatars: [
            'https://i.pravatar.cc/150?img=10',
            'https://i.pravatar.cc/150?img=11',
            'https://i.pravatar.cc/150?img=12'
          ],
          link: 'https://stackoverflow.com/questions/456789/how-to-use-async-await-in-javascript'
        },
        {
          question: 'What is the difference between == and === in JavaScript?',
          answerCount: 7,
          viewsCount: 25,
          answerAvatars: [
            'https://i.pravatar.cc/150?img=13',
            'https://i.pravatar.cc/150?img=14',
            'https://i.pravatar.cc/150?img=15'
          ],
          link: 'https://stackoverflow.com/questions/567890/what-is-the-difference-between-and-in-javascript'
        },
        {
          question: 'How to use Vuex with Vue 3?',
          answerCount: 4,
          viewsCount: 15,
          answerAvatars: [
            'https://i.pravatar.cc/150?img=16',
            'https://i.pravatar.cc/150?img=17',
            'https://i.pravatar.cc/150?img=18'
          ],
          link: 'https://stackoverflow.com/questions/678901/how-to-use-vuex-with-vue-3'
        },
        {
          question: 'How to check if an array includes a value in JavaScript?',
          answerCount: 6,
          viewsCount: 22,
          answerAvatars: [
            'https://i.pravatar.cc/150?img=19',
            'https://i.pravatar.cc/150?img=20',
            'https://i.pravatar.cc/150?img=21'
          ],
          link: 'https://stackoverflow.com/questions/789012/how-to-check-if-an-array-includes-a-value-in-javascript'
        },
        {
          question: 'How to use React with TypeScript?',
          answerCount: 9,
          viewsCount: 35,
          answerAvatars: [
            'https://i.pravatar.cc/150?img=22',
            'https://i.pravatar.cc/150?img=23',
            'https://i.pravatar.cc/150?img=24'
          ],
          link: 'https://stackoverflow.com/questions/890123/how-to-use-react-with-typescript'
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
  })(pinia)
}