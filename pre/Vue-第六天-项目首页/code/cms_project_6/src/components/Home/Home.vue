<template>
    <div>
        <!-- 上有轮播图，下有九宫格 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index">
                <img :src="img.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <div class="grid">
            <my-ul>
                <my-li v-for="(grid,index) in grids" :key="index">
                    <a href="">
                        <span :class="grid.className"></span>
                        <div>{{grid.title}}</div>
                    </a>
                </my-li>
            </my-ul>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            imgs:[],    //轮播图数据
            grids:[
                {title:"新闻资讯",className:"cms-news"},
                {title:"动态搜索",className:"cms-photo"},
                {title:"新闻资讯",className:"cms-news"},
                {title:"动态搜索",className:"cms-photo"},
                {title:"新闻资讯",className:"cms-news"},
                {title:"动态搜索",className:"cms-photo"}
            ]
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
    .cms-news{

    }
    .cms-photo{

    }
</style>
