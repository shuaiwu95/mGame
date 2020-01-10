<template>
    <div class="container">
      <router-view />
      <yd-tabbar :fixed="true" fontsize="1.5rem" padding="0.8rem 0">
        <yd-tabbar-item title="首页" link="/" :active="activeBar['home']" @click.native="onClickBar('home')">
            <yd-icon name="home" slot="icon" size="3rem"></yd-icon>
        </yd-tabbar-item>
        <!-- <yd-tabbar-item title="购物车" link="#">
            <yd-icon name="shopcart" slot="icon" size="2rem"></yd-icon>
        </yd-tabbar-item> -->
        <yd-tabbar-item title="个人" link="/mine" :active="activeBar['mine']" @click.native="onClickBar('mine')">
            <yd-icon name="ucenter-outline" slot="icon" size="3rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
    </div>
</template>
<script>
export default {
  name: 'Layout',
  methods: {
    onClickBar (name) {
      if (name === 'home') {
        this.activeBar.home = true
        this.activeBar.mine = false
      } else {
        this.activeBar.home = false
        this.activeBar.mine = true
      }
    },
    toLogin () {
      this.$clearToken()
      this.$router.push({ name: 'Login' })
    }
  },
  mounted () {
    const _self = this
    document.addEventListener('plusready', function () {
      window.plus.key.addEventListener('backbutton', function () {
        _self.$router.back(-1)
      })
    }, false)
  },
  data () {
    return {
      activeBar: {
        home: true,
        mine: false
      }
    }
  }
}
</script>
<style scoped>
.container{
  width: 100%;
  height: 100%;
}
</style>
