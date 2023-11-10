import Auth_GetStatusInfo from './auth/getStatusInfo.js'
import College_News from './college/news.js'
import Home_ResumeSample from './home/resumeSample.js'
import Home_StorySample from './home/storySample.js'
import Home_GiverQaList from './home/giverQaList.js'
import Home_EventList from './home/eventList.js'
import Home_PodcastList from './home/podcastList'
import Ig_Article_List from './ig/article/list.js'

export default {
  getProfile: Auth_GetStatusInfo.get,
  getCollegeNews: College_News.get,
  getResumeSample: Home_ResumeSample.get,
  getPortfolioSample: Home_StorySample.get,
  getGiverQaList: Home_GiverQaList.get,
  getEventList: Home_EventList.get,
  getPodcastChannel: Home_PodcastList.get,
  getIgChannel: Ig_Article_List.get
}