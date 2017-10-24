import { Toast } from 'mint-ui'

export default function ({ store, error, route, redirect }) {
  if (!store.state.authUser) {
    redirect('/login')
    Toast({
      message: '请先登录',
      className: 'win95-toast'
    })
  }
}
