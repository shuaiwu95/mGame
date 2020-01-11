<template>
<keep-alive :include="cachedViews">
   <router-view />
</keep-alive>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  methods: {
    initRem () {
      const html = document.querySelector('html')
      const { width } = html.getBoundingClientRect()
      html.style.fontSize = `${width / 50}px`
    },
    addViewToVisided () {
      const thisRoute = this.$route.name ? this.$route : null
      if (thisRoute) this.$store.dispatch('views/addVisitedViews', { route: thisRoute })
    }
  },
  watch: {
    $route () {
      this.addViewToVisided()
    }
  },
  computed: {
    ...mapGetters('views', { // views.js里面的getters
      cachedViews: 'cachedViews'
    })
  },
  mounted () {
    this.initRem()
    window.onresize = () => {
      this.initRem()
    }
    this.addViewToVisided()
    this.$dialog.loading.open('正在加载，请耐心等待！')
    window.onload = () => {
      this.$dialog.loading.close()
    }
  }
}
</script>

<style>
  @font-face {
    font-family: 'AAAAAAA';  /* project id 1604478 */
    src: url('https://at.alicdn.com/t/font_1604478_un9zw25oit.eot');
    src: url('https://at.alicdn.com/t/font_1604478_un9zw25oit.eot?#iefix') format('embedded-opentype'),
    url('https://at.alicdn.com/t/font_1604478_un9zw25oit.woff2') format('woff2'),
    url('https://at.alicdn.com/t/font_1604478_un9zw25oit.woff') format('woff'),
    url('https://at.alicdn.com/t/font_1604478_un9zw25oit.ttf') format('truetype'),
    url('https://at.alicdn.com/t/font_1604478_un9zw25oit.svg#iconfont') format('svg');
  }

    [class^="yd-icon-"]:before, [class*=" yd-icon-"]:before {
        font-family: 'AAAAAAA'!important;
    }
    .yd-icon-home:before {
      content: "\e6b1"!important;
    }
    .yd-icon-ucenter-outline:before{
      content: "\e670"!important;
    }
    .yd-icon-time:before{
      content: "\e699"!important;
    }
    .yd-icon-ucenter:before{
       content: "\e689"!important;
    }
@import url('./assets/styles/iconFont.css');
html,body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
a, img, div, form, select, input, ul, ol, li, h1, h2, h3, h4, h5, h6, dd, dl, dt, p, label, em, span, cude, i {
    margin: 0;
    padding: 0;
    list-style: none;
    vertical-align: middle;
}
</style>
