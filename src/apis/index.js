import Auth_GetStatusInfo from './auth/getStatusInfo.js'
import Home_ResumeSample from './home/ResumeSample.js'
export default {
  getProfile: Auth_GetStatusInfo.get,
  getResumeSample: Home_ResumeSample.get
}