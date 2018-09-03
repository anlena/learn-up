// 整个程序的入口
import Vue from './vue.js'
import App from './App.js'
import {num1,num2} from './App.js'

console.log(num1,num2)

import * as obj from './App.js';

new Vue({
    el:"#app",
    components:{
        app:App
    },
    template:'<app/>'
})