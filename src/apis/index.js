import Auth_GetStatusInfo from './auth/getStatusInfo.js'
import College_News from './college/news.js'
import Home_ResumeSample from './home/resumeSample.js'
import Home_StorySample from './home/storySample.js'
import Home_GiverQaList from './home/giverQaList.js'
import Home_EventList from './home/eventList.js'
import Home_PodcastList from './home/podcastList'
import Home_PartTimeJobList from './home/partTimeJobList.js'
import Home_InternJobList from './home/internJobList.js'
import Home_Keywords from './home/keywords.js'
import Home_CareerOpportunities from './home/careerOpportunities.js'
import Ig_Article_List from './ig/article/list.js'
import Home_Blogs from './home/blogs.js'

export default {
  getProfile: Auth_GetStatusInfo.get,
  getCollegeNews: College_News.get,
  getResumeSample: Home_ResumeSample.get,
  getPortfolioSample: Home_StorySample.get,
  getGiverQaList: Home_GiverQaList.get,
  getEventList: Home_EventList.get,
  getPodcastChannel: Home_PodcastList.get,
  getIgChannel: Ig_Article_List.get,
  getArticle: Home_Blogs.get,
  getPtJob: Home_PartTimeJobList.get,
  getInternJob: Home_InternJobList.get,
  getJobTags: Home_Keywords.get,
  getJobAdvertise: Home_CareerOpportunities.get,
  getIgChannel: Ig_Article_List.get
}