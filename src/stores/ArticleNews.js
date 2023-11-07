import { defineStore } from 'pinia'
import {
  ref, computed 
} from 'vue'
import { blogUrl } from '@/common/domainConfig'

export const useArticleNews = (id = 'ArticleNews', pinia) => {
  return defineStore(id, () => {
    const moreLink = `${ blogUrl }category/topic/`
    const _list = ref([])
  
    const list = computed(() => _list.value)
    const getList = async () => {
      const result = [
        {
          title: 'Sample Article 1 with a Longer Title',
          content: 'This is a sample article content. It is a bit longer than the previous version to provide more context and information about the article. Hopefully this will be helpful to the readers who are interested in this topic.',
          link: 'https://example.com/article1',
          image: 'https://source.unsplash.com/random/100x600',
          isPinned: true
        },
        {
          title: 'Sample Article 2 with an Even Longer Title',
          content: 'This is another sample article content. It is even longer than the previous version to provide even more context and information about the article. Hopefully this will be helpful to the readers who are interested in this topic.',
          link: 'https://example.com/article2',
          image: 'https://source.unsplash.com/random/200x600',
          isPinned: false
        },
        {
          title: 'Sample Article 3 with a Very Long Title',
          content: 'This is yet another sample article content. It has a very long title to catch the attention of the readers who are interested in this topic. The content is also longer than the previous versions to provide more detailed information about the topic.',
          link: 'https://example.com/article3',
          image: 'https://source.unsplash.com/random/300x600',
          isPinned: false
        },
        {
          title: 'Sample Article 4 with an Extremely Long Title',
          content: 'This is the last sample article content. It has an extremely long title to make it stand out from the other articles. The content is also longer than the previous versions to provide the readers with a comprehensive understanding of the topic.',
          link: 'https://example.com/article4',
          image: 'https://source.unsplash.com/random/400x600',
          isPinned: true
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