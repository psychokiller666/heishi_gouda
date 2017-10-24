<template>
  <section class="show">
    <div class="win95-features">
      <button class="win95-button back" @!click="back">返回</button>
    </div>
    <hr class="win95-hr" />
    <div class="image_cover"  v-lazy:background-image="user.cover + `?x-oss-process=image/resize,h_360`"></div>
    <div class="image_list">
      <div class="list-scroll">
        <div class="list-item" v-for="item in user.img_list" v-lazy:background-image.container="item + `?x-oss-process=image/resize,h_100`"></div>
      </div>
    </div>
    <div class="win95-input">
      <label>姓名：</label><input type="text" :value="user.nickname" disabled placeholder="最多10个字。" />
    </div>
    <div class="win95-input" v-show="user.weixin_id">
      <label>微信：</label><input type="text" :value="user.weixin_id" placeholder="微信地址，毕竟还可以不接受。" />
    </div>
    <div class="win95-input">
      <label>简介：</label><textarea placeholder="最多20个字" disabled rows="5">{{ user.quote }}</textarea>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  validate ({ params }) {
    return (!!params.id && !Object.is(Number(params.id), NaN))
  },
  async asyncData ({ store, params, app, error }) {
    const res = await axios.post('showotherinfo', {
      openid: store.getters['GET_OPENID'],
      to_user_id: params.id
    })
    if (res.data.code === 0) {
      return {
        user: res.data.data
      }
    } else {
      error({
        statusCode: 404,
        message: '没有这个人'
      })
    }
  },
  middleware: 'auth',
  methods: {
    back () {
      if (window.history.length === 1) {
        this.$router.push('/')
      } else {
        window.history.back()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.show {
  .image_cover {
    height: 360px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border: 2px solid #000;
    border-right: 4px solid #dcdcdc;
    border-bottom: 4px solid #dcdcdc;
    margin-bottom: 0.5em;
    &:after {
      content: '';
      position: absolute;
      border-right: 2px solid #000;
      border-bottom: 2px solid #000;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }
  }
  .image_list {
    padding: 10px;
    height: 100px;
    border: 2px solid #000;
    margin-bottom: 0.5em;
    transform: rotate3d(0, 0, 0, 0);
    overflow-x:auto;
    overflow-y:hidden;
    .list-scroll {
      width: 880px;
      .list-item {
        float: left;
        width: 100px;
        height: 100px;
        margin-right: 10px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        position: relative;
        &:after {
          content: ' ';
          display: block;
          clear: both;
        }
      }
    }
  }
  .win95-input {
    &:last-child {
      margin-bottom: 1em;
    }
  }
}
</style>
