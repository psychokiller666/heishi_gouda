<template>
  <section class="list">
    <div class="win95-features">
      <nuxt-link to="/" class="win95-button back">返回</nuxt-link>
    </div>
    <hr class="win95-hr" />
    <ul class="items">
      <li class="item" v-for="item in items">
        <nuxt-link :to="{ name: 'show-id', params: { id: item.id }}" class="userinfo">
          <div class="avatar" v-lazy:background-image="item.head_img+`/96`"></div>
          <div class="username">{{ item.nickname }}</div>
        </nuxt-link>
        <nuxt-link :to="{ name: 'show-id', params: { id: item.id }}" class="win95-button">查看</nuxt-link>
      </li>
    </ul>

    <div class="win95-prompt page-infinite-loading">
      <div v-show="!items.length">你喜欢过的人都会出现在这里。</div>
    </div>
  </section>
</template>
<script>
import axios from '~/plugins/axios'

export default {
  async asyncData ({ store }) {
    const res = await axios.post('likelist', {
      openid: store.getters['GET_OPENID'],
      page_size: 200,
      cur_page: 1
    })
    if (res.data.code === 0) {
      return {
        items: res.data.data
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  .items {
    padding: 0 8px;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      position: relative;
      .userinfo {
        display: inline-flex;
        .avatar {
          width: 38px;
          height: 38px;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
          display: inline;
          border-top: 2px solid #000;
          border-left: 2px solid #000;
          border-right: 4px solid #dcdcdc;
          border-bottom: 4px solid #dcdcdc;
          position: relative;
          &:after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            border-right: 2px solid #000;
            border-bottom: 2px solid #000;
          }
        }
        .username {
          line-height: 40px;
          height: 40px;
          display: inline;
          font-size: 18px;
          margin-left: 12px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: bold;
          width: 110px;
        }
      }
    }
  }
}
</style>
