<template>
  <section class="login">
    <div class="win95-prompt">
      <h2>登录：</h2>
      <hr class="win95-hr" />
      <div class="aaa" v-show="isWechat">
        <p><button class="win95-button" @!click="wechat_login()" :disabled="this.$route.query.code">微信登录</button></p>
        <p v-show="toast" class="toast success">{{ toast ? '状态：登录成功' : '状态：登录失败' }}</p>
        <hr class="win95-hr" />
      </div >
      <h2>提示：</h2>
      <p v-show="!isWechat">请返回app登录后，再来使用！</p>
      <p>本次开放不限时</p>
      <!-- <p>我还没想到更好的功能，有的话，你在黑市后台留言</p> -->
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      toast: null,
      isWechat: /microMessenger/i.test(window.navigator.userAgent.toLowerCase())
    }
  },
  mounted () {
    if (this.$route.query.token) {
      this.$store.commit('SET_USER', this.$route.query.token)
      this.$router.push({ path: '/' })
    }
    if (this.$route.query.code) {
      this.$store.dispatch('REQ_WECHAT_LOGIN', this.$route.query.code).then(res => {
        if (res) {
          this.toast = true
          this.$router.push({ path: '/' })
        } else {
          this.toast = false
        }
      })
    }
  },
  methods: {
    wechat_login () {
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + window.heishiConfig.wechatAppid + '&redirect_uri=' + encodeURIComponent(window.location.href) + '&response_type=code&scope=snsapi_userinfo&state=gouda'
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
