import { detect } from 'detect-browser'
const useUserAgentInfo = () => {
  const browserInfo = detect()
  const {
    name, os 
  } = browserInfo

  const webviewNames = [ 'chromium-webview', 'ios-webview', 'facebook', 'instagram' ]
  const isWebview = webviewNames.some(el => el === name)
  const isMobile = os === 'Android OS' || os === 'iOS'

  const is104App = navigator.userAgent.includes('M104app')

  return {
    browserInfo, isWebview, isMobile, is104App, getNativeBrowserLink
  }
}

const getNativeBrowserLink = (url) => {
  const { browserInfo } = useUserAgentInfo()
  const querySign = url.includes('?') ? '&' : '?' 

  if (/Line/i.test(navigator.userAgent)){
    return `${ url }${ querySign }openExternalBrowser=1`
  } else if (browserInfo.os === 'iOS'){
    return `${ url.replace(/^https?:\/\//, 'googlechrome://') }${ querySign }action=submit`
  } else {
    return `${ url.replace(/^https?:\/\//, 'intent:/') }${ querySign }action=submit/#Intent;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.android.chrome;scheme=https;end`
  }
}

export default useUserAgentInfo