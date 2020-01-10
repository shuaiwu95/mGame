<template>
  <div class="container">
    <yd-navbar :fixed="true" bgcolor="rgb(9, 187, 7)" color="#ffffff" height="5rem" fontsize="2rem" title="爱边游"></yd-navbar>
    <yd-tab height="4rem" font-size="1.6rem" style="margin-top:5rem;width:100%;">
      <yd-tab-panel label="推荐">
          <recommond-view></recommond-view>
      </yd-tab-panel>
      <yd-tab-panel label="扫码领红包">
        <div class="img-con">
          <img :src="require('@/assets/hb.png')"/>
        </div>
      </yd-tab-panel>
      <!-- <yd-tab-panel label="排行">3</yd-tab-panel>
      <yd-tab-panel label="分类">4</yd-tab-panel> -->
    </yd-tab>
  </div>
</template>
<script>
import RecommondView from './component/recommond'
export default {
  components: { RecommondView }
}
</script>
<style scoped>
.container {
  width: 100%;
}
.img-con{
  width: 100%;
  height: 100%;
  padding: 4rem;
}
img{
  width: 100%;
  height: 100%;
}
</style>
