<template>
     <div class="md-list">
        <ul>
            <li>
                <a href="javascript:void(0)">
                    <img :src="icon">
                    <em>{{name}}</em>
                    <p>{{title}}</p>
                </a>
                <a class="btn" @click="play(url)">开始玩</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  props: {
    name: {
      default: ''
    },
    title: {
      default: ''
    },
    icon: {
      default: ''
    },
    url: {
      default: ''
    }
  },
  methods: {
    play (url) {
      this.$emit('on-goPlay', url)
    }
  }
}
</script>
<style scoped>
.md-list {
    margin-top: 1rem;
}
.md-list li {
    height: 10rem;
    padding: 1rem 1rem;
    position: relative;
    margin-bottom: 1rem;
    background: #fff;
    overflow: hidden;
}
.md-list li a {
    display: block;
    color: #333;
    text-decoration: none;
    outline: none;
}
.md-list li em{
    margin-left: 1.6rem;
    font-size: 2rem;
}
.md-list li img {
    float: left;
    width: 8rem;
    height: 8rem;
    border-radius: 1rem;
}
.md-list li p {
    height: 3rem;
    line-height: 3rem;
    padding-left: 1.6rem;
    color: #959595;
    font-size: 1.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.md-list li i {
    top: 0.14rem;
    left: 0.18rem;
}
.md-list li .btn {
    position: absolute;
    top: 2rem;
    right: 1rem;
    width: 8rem;
    height: 3rem;
    line-height: 3rem;
    padding: 0.16rem 0;
    text-align: center;
    border-radius: 0.1rem;
    border: 1px solid #00cc7d;
    color: #00cc7d;
}
</style>
