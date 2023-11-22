import { defineStore } from 'pinia'
import {
  guideUrl, giverUrl, nabiUrl 
} from '@/common/domainConfig'

export const useTool = (id = 'Tool', pinia) => {
  return defineStore(id, () => {
    const tool = [
      {
        title: '分析職場性格優勢找工作',
        content: '想知道自己的性格最適合從事什麼工作？分析你的性格優勢，推薦跟你個性最速配的工作！',
        image: new URL('../assets/img/Index/Tool/tool-personality.gif', import.meta.url).href,
        icon: new URL('../assets/img/Index/Tool/icon-personality.png', import.meta.url).href,
        buttons: [
          {
            text: '職業適性測驗',
            link: `${ guideUrl }personality/?utm_source=cweb_studentmainpage&utm_medium=university_toolbox`,
            target: '_blank'
          }
        ]
      },
      {
        title: '科系發展和學長姐真心話',
        content: '選擇你的目標校系，了解學長姐們都在做什麼職業、在什麼產業工作，薪資也不藏私分享給你！',
        image: new URL('../assets/img/Index/Tool/tool-career.gif', import.meta.url).href,
        icon: new URL('../assets/img/Index/Tool/icon-career.png', import.meta.url).href,
        buttons: [
          {
            text: '升學就業地圖',
            link: `${ guideUrl }career/?utm_source=cweb_studentmainpage&utm_medium=university_toolbox`,
            target: '_blank'
          }
        ]
      },
      {
        title: '職業必備技能及薪資發展',
        content: '想成為的職業要具備哪些技能、薪水待遇如何、未來還有哪些發展？這些問題的答案這裡都找得到！',
        image: new URL('../assets/img/Index/Tool/tool-wow.gif', import.meta.url).href,
        icon: new URL('../assets/img/Index/Tool/icon-wow.png', import.meta.url).href,
        buttons: [
          {
            text: '前往工作世界',
            link: `${ guideUrl }wow/?utm_source=cweb_studentmainpage&utm_medium=university_toolbox`,
            target: '_blank'
          }
        ]
      },
      {
        title: '職場疑難雜症發問',
        content: '求職沒方向？履歷已讀不回？面試簡報準備？離職理由怎麼說？薪水怎麼談？到職涯診所找解答',
        image: new URL('../assets/img/Index/Tool/tool-giver.gif', import.meta.url).href,
        icon: new URL('../assets/img/Index/Tool/icon-giver.png', import.meta.url).href,
        buttons: [
          {
            text: '前往職涯診所',
            link: `${ giverUrl }questionList/0/tag/3wEeebVkeKqgd?orderType=latest&dn58=3wEeebVkeKqgd&tagType=0?utm_source=cweb_studentmainpage&utm_medium=university_toolbox`,
            target: '_blank'
          }
        ]
      },
      {
        title: '學習職場技能考取證照',
        content: '企業要的證照，你都有嗎?什麼證照能幫助你履歷更加分?來看看你工作所需的證照吧!',
        image: new URL('../assets/img/Index/Tool/tool-certify.gif', import.meta.url).href,
        icon: new URL('../assets/img/Index/Tool/icon-certify.png', import.meta.url).href,
        buttons: [
          {
            text: '前往證照中心',
            link: `${ nabiUrl }certify?utm_source=cweb_studentmainpage&utm_medium=university_toolbox`,
            target: '_blank'
          }
        ]
      },
    ]
  
    return {
      tool
    }
  })(pinia)
}