<template>
  <section class="edit">
    <div class="win95-features">
      <nuxt-link to="/" class="win95-button back">返回</nuxt-link>
      <file-upload class="win95-button" ref="upload" accept="image/png,image/gif,image/jpeg,image/webp" :size="upload_config.size" :multiple="true" v-model="files" :post-action="upload_config.url" :data="upload_config.data" @input-file="inputFile">
        上传
      </file-upload>
    </div>
    <hr class="win95-hr" />
    <div class="image_cover" v-lazy:background-image="userinfo.cover+`?x-oss-process=image/resize,h_360`" v-show="userinfo.cover"></div>
    <div class="image_list" v-show="userinfo.img_list.length">
      <div class="list-scroll">
        <div class="list-item" v-for="img in userinfo.img_list">
          <div class="image" v-lazy:background-image.container="img.url + `?x-oss-process=image/resize,h_100`" @!click="select_cover(img)"></div>
          <div class="progress" v-if="img.progress < 100" v-bind:style="{width: `${img.progress}%`}"></div>
          <button class="win95-button del" @!click="del_img(img)"> x </button>
        </div>
      </div>
    </div>
    <div class="win95-input">
      <label>姓名：</label><input type="text" v-model:value="userinfo.nickname" placeholder="最多10个字。" />
    </div>
    <div class="win95-input">
      <label>性别：</label>
      <span><input name="Fruit" type="radio" v-model="userinfo.gender" value="1" />男</span>
      <span><input name="Fruit" type="radio" v-model="userinfo.gender" value="2" />女</span>
    </div>
    <div class="win95-input">
      <label>微信：</label><input type="text" v-model:value="userinfo.weixin_id" placeholder="微信地址，毕竟还可以不接受。" />
    </div>
    <div class="win95-input">
      <label>简介：</label><textarea placeholder="最多20个字" v-model:value="userinfo.quote" rows="5"></textarea>
    </div>
    <div class="win95-input">
      <label></label>
      <button class="win95-button submit" @!click="submit">提交</button>
    </div>
  </section>
</template>

<script>
import FileUpload from 'vue-upload-component'
import { Toast, Indicator, MessageBox } from 'mint-ui'
import axios from '~/plugins/axios'

export default {
  async asyncData ({ store, params, app, error }) {
    const res = await axios.post('showinfo', {
      openid: store.getters['GET_OPENID']
    })
    if (res.data.code === 0) {
      const temp = []
      res.data.data.img_list.forEach((item) => {
        temp.push({
          url: item
        })
      })
      res.data.data.img_list = temp
      return {
        userinfo: res.data.data
      }
    } else {
      error({
        statusCode: 404
      })
    }
  },
  data () {
    return {
      img: [],
      files: [],
      upload_config: {
        url: window.heishiConfig.baseUrl + 'upload',
        auto: true,
        max_files: 8,
        size: 1024 * 1024 * 10,
        data: {
          openid: this.$store.getters['GET_OPENID']
        }
      }
    }
  },
  components: {
    FileUpload
  },
  middleware: 'auth',
  methods: {
    inputFile (newFile, oldFile) {
      if (newFile && !oldFile) {
        // 添加文件
        this.userinfo.img_list.push({
          id: newFile.id,
          url: null,
          progress: 0
        })
        // 自动上传
        if (!this.$refs.upload.active) {
          this.$refs.upload.active = true
        }
      }

      if (newFile && oldFile) {
        // 开始上传
        // 上传进度
        if (newFile.progress !== oldFile.progress) {
          this.userinfo.img_list.forEach((item) => {
            if (item.id === newFile.id) {
              item.progress = newFile.progress
            }
          })
        }
        // 上传错误
        if (newFile.error !== oldFile.error) {
          Toast({
            message: 'error:' + newFile.error,
            className: 'win95-toast'
          })
        }
        // 上传成功
        if (newFile.success !== oldFile.success) {
          if (!this.userinfo.cover) {
            this.userinfo.cover = this.files[0].response.data
          }
          // console.log(this.temp_img_list)
          this.userinfo.img_list.forEach((item) => {
            if (item.id === newFile.id) {
              item.url = newFile.response.data
            }
          })
        }
      }
    },
    del_img (img) {
      this.userinfo.img_list.forEach((item, key) => {
        if (img.url === item.url) {
          this.userinfo.img_list.splice(key, 1)
        }
      })
    },
    select_cover (img) {
      // console.log('选择头图')
      this.userinfo.cover = img.url
    },
    submit () {
      if (this.userinfo.img_list.length < 3) {
        Toast({
          message: '想玩勾搭至少上传三张自己的高质量穿搭图，被审核姐姐拒绝了今天就没得玩了，请认真上传。',
          className: 'win95-toast'
        })
        return
      }
      if (!this.userinfo.weixin_id.length) {
        Toast({
          message: '有点诚意好嘛，添个微信，不然不让玩！！！',
          className: 'win95-toast'
        })
        return
      }
      if (this.userinfo.gender === 0) {
        Toast({
          message: '告诉小姐姐你是男的女的',
          className: 'win95-toast'
        })
        return
      }

      this.userinfo.img_list.forEach((item) => {
        this.img.push(item.url)
      })
      Indicator.open('拼命保存呢。')
      axios.post('editinfo', {
        openid: this.$store.getters['GET_OPENID'],
        nickname: this.userinfo.nickname,
        weixin_id: this.userinfo.weixin_id,
        cover: this.userinfo.cover,
        quote: this.userinfo.quote,
        gender: this.userinfo.gender,
        img: this.img
      }).then(res => {
        Indicator.close()
        if (res.data.code === 0) {
          MessageBox.confirm('等着小姐姐审核吧。').then(action => {
            this.$router.push('/')
          })
        } else {
          Toast({
            message: res.data.error_msg,
            className: 'win95-toast'
          })
        }
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.edit {
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
        position: relative;
        .image {
          position: absolute;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
        .progress {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 20%;
          background-color: #000080;
        }
        .del {
          position: absolute;
          right: 0px;
          top: 0px;
          min-height: 0;
          min-width: 0;
          height: 32px;
          width: 32px;
          font-size: 14px;
          line-height: 14px;
          padding: 0;
          z-index: 999;
        }
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
