import Vue from 'vue';  //node_modules 下面的vue
import App from './App.vue'

new Vue({
    el:'#app',
    render: c => (App)
    //下边这种方式是在直接引入vue.js时用
    // components:{
    //     app:App
    // },
    // template:`</app>`
})