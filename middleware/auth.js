import { Toast } from 'mint-ui'
import wx from 'weixin-js-sdk'
import axios from '~/plugins/axios'

export default function ({ store, error, route, redirect }) {
  if (!store.state.authUser) {
    redirect('/login')
    Toast({
      message: '请先登录',
      className: 'win95-toast'
    })
  } else {
    axios.post('js', {
      url: window.location.origin + '/activity/gouda' + route.path
    }).then(res => {
      if (res.data.code === 0) {
        wx.config({
          debug: res.data.data.debug,
          appId: res.data.data.appId,
          timestamp: res.data.data.timestamp,
          nonceStr: res.data.data.nonceStr,
          signature: res.data.data.signature,
          jsApiList: res.data.data.jsApiList
        })
        wx.ready(function () {
          wx.hideMenuItems({
            menuList: ['menuItem:share:appMessage', 'menuItem:share:timeline', 'menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:QZone']
          })
        })
      } else {
        console.log(res.data.error_msg)
      }
    })
  }
}
