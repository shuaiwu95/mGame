<template>
  <div class="container">
      <yd-slider autoplay="3000">
        <yd-slider-item>
            <a>
                <img src="http://imga3.4399.cn/upload_pic/2020/1/6/4399_17260431491.gif">
            </a>
        </yd-slider-item>
    </yd-slider>
    <yd-rollnotice autoplay="5000" style="margin-top:1rem;padding-left:1rem;">
        <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>今日爱边游小游戏APP震撼上线！</yd-rollnotice-item>
        <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>众多H5开源小游戏欢乐畅玩！</yd-rollnotice-item>
        <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>更多精彩尽情期待！</yd-rollnotice-item>
    </yd-rollnotice>
    <game-list v-for="item in gameList" :key="item.id" :name="item.name" :title="item.title" :url="item.src" @on-goPlay="goplay"></game-list>
  </div>
</template>
<script>
import GameList from '@/components/GameList'
export default {
  components: { GameList },
  mounted () {
    // this.$api['game.getGames']().then(res => {
    //   if (res.MSG === 'ok') {
    //     this.gameList = res.list
    //   }
    // })
    this.$ajax.get('/game.json').then(response => {
      // eslint-disable-next-line no-debugger
      this.gameList = response.data
    }, response => {
      console.log('数据加载失败')
    })
    // this.gameList = gameJson
  },
  methods: {
    goplay (url) {
      this.$router.push({ name: 'Play', params: { urlStr: url } })
    }
  },
  data () {
    return {
      gameList: [

      ]
    }
  }
}
</script>
<style scoped>
.container {
  width: 100%;
}
</style>
