<template>
    <div>
        <!-- 上有轮播图，下有九宫格 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index">
                <img :src="img.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data (){
        return {
            imgs:[]
        }
    },

    // 创建组件的声明周期中，可以操作数据
    created() {
        this.$axios.get('getlunbo')
        .then(res => {
             this.imgs = res.data.message;
        })
        .catch(err => {
            console.log('轮播图获取异常',err);
        })
    }
}
</script scoped>

<style>
    .mint-swipe{
        height: 200px;
    }
    img{
        width: 100%;
    }
</style>
