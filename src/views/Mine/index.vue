<template>
    <div class="container">
        <div class="main-con">
            <span class="user"><yd-icon name="ucenter"></yd-icon></span>
            <span class="login">立即登录</span>
        </div>
        <yd-cell-group style="margin-top:1rem;">
            <yd-cell-item arrow>
                <yd-icon slot="icon" name="time" size="2rem"></yd-icon>
                <span style="font-size:2rem;" slot="left">历史记录</span>
                <span style="font-size:2rem;" slot="right">查看游玩记录</span>
            </yd-cell-item>
        </yd-cell-group>
        <yd-button size="large" type="danger">注销</yd-button>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.container{
    height: 100%;
    width: 100%;
}
.main-con{
    display: flex;
    flex-direction: column;
    height: 20rem;
    background-color: #36c835;
    justify-content: center;
    align-items: center;
}
.user i{
    font-size: 6rem!important;
    color: #ffffff;
}
.login{
    color: #ffffff;
    font-size: 2rem;
}
.yd-cell-item{
    padding: 1rem;
}
.yd-btn-block{
    height: 5rem!important;
    padding: 1rem 0;
    font-size: 2rem;
}
</style>
