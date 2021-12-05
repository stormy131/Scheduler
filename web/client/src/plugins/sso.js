import Vue from 'vue'
import VueCookie from 'vue-cookie'
import axios from 'axios'

Vue.use(VueCookie)

class SSO {
  constructor () {
    this.cookieName = process.env.VUE_APP_SSO_COOKIE_NAME || 'ssoAuthen'
    this.continueUrl = process.env.VUE_APP_SSO_CONTINUE_URL || 'http://localhost:8080/'
    this.gatewayUrl = process.env.VUE_APP_SSO_GATEWAY_URL || 'http://gateway.futagoship.lc/'
    this.loginUrl = this.gatewayUrl + 'login?continue=' + this.continueUrl
    this.registerUrl = this.gatewayUrl + 'register?continue=' + this.continueUrl
    this.logoutUrl = this.gatewayUrl + 'logout'

    if (VueCookie.get(this.cookieName)) {
      this.query = JSON.parse(VueCookie.get(this.cookieName))
    } else {
      this.query = this.getParameter(location.search)
    }

    if (this.query && this.query.access_token && this.query.expires_in) {
      VueCookie.set(this.cookieName, JSON.stringify(this.query), { expires: this.query.expires_in + 's' })
    }

    if (this.getParameter(location.search).access_token) {
      window.history.pushState('', document.title, document.location.origin + document.location.pathname)
    }

    if (this.query.access_token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.query.access_token
    }

  }

  login () {
    if (!VueCookie.get(this.cookieName)) {
      window.location.href = this.loginUrl
    }
  }

  register () {
    if (!VueCookie.get(this.cookieName)) {
      window.location.href = this.registerUrl
    }
  }

  getParameter (str) {
    if (str) {
      return JSON.parse('{"' + decodeURI(str.replace('?', '').replace(/&/g, '","').replace(/=/g, '":"')) + '"}')
    }
    return {}
  }
// eslint-disable-next-line no-unused-vars
  logout (callback) {
    if (this.query.access_token) {
      VueCookie.delete(this.cookieName)
      window.location.href = this.logoutUrl + '?access_token=Bearer ' + this.query.access_token + '&continue=' + this.continueUrl
    }
  }

  getAccessToken () {
    if (this.query.access_token) {
      return this.query
    }
    return {}
  }

  async getProfile () {
    let response = await axios.get(this.gatewayUrl + 'id/profile')
    return response.data
  }

}

const _sso = new SSO()

// eslint-disable-next-line no-unused-vars
Plugin.install = function (Vue, options) {
  Vue.sso = _sso
  window.sso = _sso
  Vue.prototype.sso = _sso
  Vue.prototype.$sso = _sso
}

Vue.use(Plugin)

export default _sso
