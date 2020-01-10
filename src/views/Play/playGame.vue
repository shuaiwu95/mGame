<template>
    <div class="container" style="position:fixed;left:0;z-index:9999999999;">
        <iframe frameborder="0" style="width:100%;height:100%;" :src="url"></iframe>
    </div>
</template>
<script>
export default {
  methods: {

  },
  mounted () {
    // $route.params.url
    this.url = this.$route.params.urlStr
    // http://192.168.1.94:9090/games/jsyls/index.html#/
    // this.url = 'http://192.168.1.94:9090/games/tkdz/index.html#/'
    // eslint-disable-next-line dot-notation
    window['plus'].navigator.setFullscreen(true)
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
