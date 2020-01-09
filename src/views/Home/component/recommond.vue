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
    <game-list></game-list>
  </div>
</template>
<script>
import GameList from '@/components/GameList'
export default {
  components: { GameList }
}
</script>
<style scoped>
.container {
  width: 100%;
}
</style>
