<template>
  <section class="login">
    <div class="win95-prompt">
      <h2>登录：</h2>
      <hr class="win95-hr" />
      <p><button class="win95-button" @!click="wechat_login()">微信登录</button></p>
      <p v-show="toast" class="toast success">{{ toast ? '状态：登录成功' : '状态：登录失败' }}</p>
      <hr class="win95-hr" />
      <h2>提示：</h2>
      <p>每周三限时开放24小时</p>
      <!-- <p>我还没想到更好的功能，有的话，你在黑市后台留言</p> -->
    </div>
  </section>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  data () {
    return {
      toast: null
    }
  },
  mounted () {
    if (this.$route.query.code) {
      this.$store.dispatch('REQ_WECHAT_LOGIN', this.$route.query.code).then(res => {
        if (res) {
          this.toast = true
          this.$router.push({ path: '/' })
        } else {
          Toast({
            message: '登录失败',
            className: 'win95-toast'
          })
          this.toast = false
        }
      })
    }
  },
  methods: {
    wechat_login () {
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + window.heishiConfig.wechatAppid + '&redirect_uri=' + encodeURIComponent(window.location.href) + '&response_type=code&scope=snsapi_base&state=gouda'
    }
  }
}
</script>

<style lang="scss">
.login {
  .win95-prompt {
    text-align: left;
    img {
      height: 49px;
    }
    p {
      color: red;
    }
    .toast {
      color: red;
      &.success {
        color: green;
      }
    }
  }
}
</style>
