<template>
  <section class="list">
    <div class="win95-features">
      <nuxt-link to="/" class="win95-button back">返回</nuxt-link>
    </div>
    <hr class="win95-hr" />
    <ul class="items" v-infinite-scroll="loadMore" :infinite-scroll-disabled="loading">
      <li class="item" v-for="item in items">
        <nuxt-link :to="{ name: 'show-id', params: { id: item.user_id }}" class="userinfo">
          <div class="avatar" v-lazy:background-image="item.weixin_headimg+`/96`"></div>
          <div class="username">{{ item.nickname }}</div>
        </nuxt-link>
        <button class="win95-button" v-if="item.paired == 0" @!click="postLike(item.user_id)">LIKE</button>
        <nuxt-link :to="{ name: 'show-id', params: { id: item.user_id }}" class="win95-button">WECHAT</nuxt-link>
      </li>
    </ul>

    <div class="win95-prompt page-infinite-loading">
      <div v-show="!items.length">只有相互点赞的人回出现在列表里，如果你点赞太多，但是没人回应是时候换换照片了。</div>
    </div>
  </section>
</template>
<script>
export default {
  asyncData ({ store }) {
    return store.dispatch('list/REQ_LIST')
  },
  middleware: 'auth',
  computed: {
    items () {
      return this.$store.state.list.list
    },
    loading () {
      return this.$store.state.list.loading
    }
  },
  methods: {
    loadMore () {
      this.$store.dispatch('list/REQ_LIST')
    },
    postLike (id) {
      this.$store.dispatch('list/REQ_LIKE', id)
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
        }
      }
    }
  }
}
</style>
