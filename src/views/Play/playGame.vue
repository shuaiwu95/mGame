<template>
    <div class="container" style="position:fixed;left:0;z-index:1000;">
        <iframe ref="frame" id="iframeId" frameborder="0" style="width:100%;height:100%;" :src="url"></iframe>
    </div>
</template>
<script>
export default {
  methods: {

  },
  created () {
    this.$dialog.loading.open('正在加载游戏资源，请耐心等待！')
  },
  mounted () {
    // $route.params.url
    this.url = this.$route.params.urlStr
    // http://192.168.1.94:9090/games/jsyls/index.html#/
    // this.url = 'http://192.168.1.94:9090/games/tkdz/index.html#/'
    // eslint-disable-next-line dot-notation
    // window['plus'].navigator.setFullscreen(true)
    this.$refs.frame.onload = () => {
      this.$dialog.loading.close()
      window.plus.nativeUI.toast('该页面需要横屏查看')
      window.plus.screen.lockOrientation('landscape-primary')
      window.plus.navigator.setFullscreen(true)
    }
  },
  data () {
    return {
      url: ''
    }
  }
}
</script>
<style scoped>
.container{
  height: 100%;
  width: 100%;
}
</style>
