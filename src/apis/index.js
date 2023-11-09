import Auth_GetStatusInfo from './auth/getStatusInfo.js'
import Home_ResumeSample from './home/resumeSample.js'
import Home_StorySample from './home/storySample.js'
import Home_GiverQaList from './home/giverQaList.js'
export default {
  getProfile: Auth_GetStatusInfo.get,
  getResumeSample: Home_ResumeSample.get,
  getPortfolioSample: Home_StorySample.get,
  getGiverQaList: Home_GiverQaList.get
}