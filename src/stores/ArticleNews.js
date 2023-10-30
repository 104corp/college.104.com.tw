import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import { blogUrl } from '@/common/domainConfig'

export const useArticleNews = (id = 'ArticleNews') => {
  return defineStore(id, () => {
    const moreLink = `${ blogUrl }/category/topic/`
    const _list = ref([])
  
    const list = computed(() => _list.value)
    const getList = async () => {
      const result = [
        {
          title: 'Sample Article 1',
          content: 'This is a sample article content.',
          link: 'https://example.com/article1',
          image: 'https://example.com/article1/image.jpg',
          isPinned: true
        },
        {
          title: 'Sample Article 2',
          content: 'This is another sample article content.',
          link: 'https://example.com/article2',
          image: 'https://example.com/article2/image.jpg',
          isPinned: false
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