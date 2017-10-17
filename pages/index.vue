<template>
  <section class="index">
<!--     <div class="invite">
      <div class="win95-prompt">
        <h2>提示：</h2>
        <p>周三 24h开放</p>
        <h2>新版本更新：</h2>
        <p>1、点<b>like</b>的时候响应快一些。</p>
        <p>2、屏蔽各种敏感关键词，以及干掉露阴癖。</p>
        <p>3、添加举报功能</p>
        <p>4、我还没想到更好的功能，有的话，你在黑市后台留言</p>
        <div class="win95-input">
          <input type="text" placeholder="密码"/>
        </div>
      </div>
    </div> -->

    <div class="win95-features">
      <button class="win95-button like" @!click="submitLike" :disabled="buttonLoad">LIKE</button>
      <button class="win95-button shit" @!click="submitShit" :disabled="buttonLoad">SHIT</button>
    </div>
    <hr class="win95-hr" />
    <mt-loadmore ref="loadmore" :top-method="loadTop">
      <div class="items">
        <div class="item" v-for="item in items">
          <div class="usermore">
            <div class="userinfo">
              <div class="avatar" v-lazy:background-image="item.head_img + `/96`"></div>
              <div class="username">{{ item.nickname }}</div>
            </div>
            <nuxt-link class="win95-button more" :to="{ name: 'show-id', params: { id: item.id } }">...</nuxt-link>
          </div>
          <div class="cover" v-lazy:background-image="item.cover + `?x-oss-process=image/resize,h_360`"></div>
          <div class="viewsphotonum">
            <div class="view">{{ item.view }} 看过</div>
            <div class="photonum">{{ item.img_list.length }}</div>
          </div>
          <div class="quote">{{ item.quote }}</div>
        </div>
      </div>
      <div class="win95-prompt" v-show="!items">
        当叫嚣的鸟群飞过天际，我的血液因等待而感到疼痛。过段时间欣赏你的人将会出现这，just wait。
      </div>
    </mt-loadmore>
  </section>
</template>

<script>
export default {
  asyncData ({ store }) {
    return store.dispatch('home/REQ_LIST')
  },
  computed: {
    buttonLoad () {
      return this.$store.state.home.buttonLoad
    },
    items () {
      return this.$store.state.home.items
    }
  },
  middleware: 'auth',
  watch: {
    items: function (item) {
      if (!this.items.length) {
        this.$store.dispatch('home/REQ_LIST')
      }
    }
  },
  methods: {
    submitLike () {
      this.$store.dispatch('home/REQ_LIKE')
    },
    submitShit () {
      this.$store.dispatch('home/REQ_SHIT')
    },
    loadTop () {
      this.$store.dispatch('home/REQ_LIST')
      this.$refs.loadmore.onTopLoaded()
    }
  }
}
</script>

<style lang="scss">
.index {
  .mint-loadmore {
    overflow: visible;
    .mint-loadmore-top {
      display: none;
    }
  }
  .items {
    position: relative;
    .item {
      position: absolute;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQzY4NjJCRUVGQzUxMUU2QTEzQUM0MjU3RDNBQjA1NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQzY4NjJCRkVGQzUxMUU2QTEzQUM0MjU3RDNBQjA1NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNDNjg2MkJDRUZDNTExRTZBMTNBQzQyNTdEM0FCMDU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNDNjg2MkJERUZDNTExRTZBMTNBQzQyNTdEM0FCMDU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+lrohygAAABlJREFUeNpi3L17NzcHNxMrK+uvv78AAgwAIbEFU+k/9JUAAAAASUVORK5CYII=');
      width: 100%;
      .usermore {
        height: 40px;
        line-height: 40px;
        padding: 0 5px;
        margin-top: 1em;
        margin-bottom: 1em;
        &:after {
          content: " ";
          display: table;
          clear: both;
        }
        .userinfo {
          float: left;
          .avatar {
            // margin-top: 2px;
            width: 38px;
            height: 38px;
            border-radius: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            float: left;
            border: 2px solid #dcdcdc;
          }
          .username {
            float: left;
            font-weight: bold;
            margin-left: 12px;
          }
        }
        .more {
          height: 32px;
          width: 32px;
          padding: 0;
          line-height: 32px;
          float: right;
          display: block;
          text-align: center;
        }
      }
      .cover {
        height: 360px;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        border: 2px solid #000;
        border-right: 4px solid #dcdcdc;
        border-bottom: 4px solid #dcdcdc;
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
      .viewsphotonum {
        font-size: 16px;
        height: 20px;
        line-height: 20px;
        padding: 0px 5px;
        margin: 0.5em 0;
        display: flex;
        justify-content: space-between;
        .view {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAYCAIAAAADE/iqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZDM1ZTk0ZS0zNzNlLTRkOGQtYjYzOS02NDhiN2NjZDQ5NjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTM2N0IxN0VFNTEzMTFFNkFDNThCRDFDN0RERTJBMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTM2N0IxN0RFNTEzMTFFNkFDNThCRDFDN0RERTJBMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNzAzN2U5Ni0yYzc0LTRiMmItOGNmOS01ZGE4NzVkMmY5YWQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Y2QzNWU5NGUtMzczZS00ZDhkLWI2MzktNjQ4YjdjY2Q0OTY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+fRq+GgAAAPZJREFUeNpiPHDgAAMRoL+/f+PGjQzEAX9//8LCQmJUMjEMKBi1fgABI2bSu3fv3vr169EExcTEBAQEiDT0w4cPr169QhMMDAxUUlJCE2TB1AzUuXnzZjRBYEr29fUl0npgHpk7dy6aoLW1Nab1IzvuWRwcHMjQhlUX/hKsoqJi8PkeUwiYQICpFE1QV1eXeEP19fWLi4vRBIG5CZinBr3vgW7s7e3FzHgKCgpEGnrx4kVgFTUUUj5mcj1x4gTWVEoh6OjosLCwIBz4xAAiWwmDPvAxhYC1C2bx/unTJ8yKABcAKsY0AWgsUTXeaGNr1Hp6AIAAAwAob1dOBzUZ/QAAAABJRU5ErkJggg==');
          height: 20px;
          padding-left: 30px;
          background-repeat: no-repeat;
          background-size: 21px 12px;
          background-position-x: 0;
          background-position-y: 4px;
          i {
            padding-left: 6px;
          }
        }
        .photonum {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAZCAIAAAA0WgDFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZDM1ZTk0ZS0zNzNlLTRkOGQtYjYzOS02NDhiN2NjZDQ5NjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTM2N0IxN0FFNTEzMTFFNkFDNThCRDFDN0RERTJBMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTM2N0IxNzlFNTEzMTFFNkFDNThCRDFDN0RERTJBMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNzAzN2U5Ni0yYzc0LTRiMmItOGNmOS01ZGE4NzVkMmY5YWQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Y2QzNWU5NGUtMzczZS00ZDhkLWI2MzktNjQ4YjdjY2Q0OTY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+IjcD8AAAAhpJREFUeNq0lTmvaVEUxx3vJhSiIQrfgEJBgYqQ6Ch8Aq1GhxhiCBokCqJSSoRoKMQQY4SoRCUxFkJCgRBDYshbL168c3FN7/g3Z6911j6/vfdZey2kUCjgvqvf7yeTycViweVyhUIhDiMhF6RarabVas+mSCQymUyYkPBoY7fbmc1mtCeXyxWLRexJnU5nu91eRJTLZexJFArlOoJOp9//hFKpDIfDr5FoNJpMJkN7iESiXC6/Mz+dTjebzVAo9JD0S6FQoG0+n7/ZbMbj8fF45HA4DocD8D9NnkwmKpUKBnDmJBKJyWS+kHsnAWa9XsPkh+cGGzqb8XicTCY/dXr/vHj8Q0w0GkVjQF6v99n/9LxGo5HP57twZjKZ4XCIMcloNN70WywWLEl+v7/X69181W638/k8NqRutxuJRO4E/PS3Xibp9fr7AdPpNBAI/C/J6XTCVXsYFgwGZ7PZ+6R6vZ5IJJ4M9ng8b5KgCuh0uueXVSqVGo3GA9J8Pk+lUhdOu91+Xebvy+12o82v6wiNRtNqtRAEkUgkJw+0qDd6x2AwyGazYrH4dt2DI6pWq6ex1WoVCATL5VIqlb53waEVxGIxAoFwWcsNBkOlUjmbsAgWiwW9Bzrke6T9fr9arXg83rc9QV/HqpFf12Iqlfo3I1wu14cwIJvN9ucBacZms3Efllqt/oLEhyRhMBiQbB/CHA4HuPW/BRgAlgPr1lDpckUAAAAASUVORK5CYII=');
          height: 20px;
          padding-left: 25px;
          background-repeat: no-repeat;
          background-size: 19px 12px;
          background-position-x: 0;
          background-position-y: 3px;
        }
      }
    }
    .quote {
      font-weight: bold;
      padding: 0.5em 0;
      margin-bottom: 1em;
    }
  }
}
</style>
