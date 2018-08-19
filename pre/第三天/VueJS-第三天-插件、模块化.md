### vue补充

##### 获取DOM元素

* 救命稻草，document.querySelect
* 1:在template中标识元素ref="xxx"
* 2:在要获取的时候，this.$refs.xxx获取元素
  * 创建组件，装载DOM，用户点击按钮
* ref在DOM上获取的是原生DOM对象
* ref在组件上获取的是组件对象
  * $el是拿其DOM
  * 这个对象就相当于我们平时玩的this,也可以直接调用函数

### 路由

#### 路由原理

* 传统开发方式，url改变后立刻发起请求，响应整个页面，渲染整个页面
* SPA锚点值改变后不会发起请求，发起ajax请求，局部改变页面数据
  * 页面不跳转 用户体验好

#### SPA

* single page application(单页应用程序)
* 前端路由
  * 锚点值监视
  * ajax获取动态数据
  * 核心是锚点值
* 前端框架Vue/angular/react/都很适合开发单页应用

#### 基本使用

* vue-router
* 其是vue的核心插件
* 1:下载 npm i vue-router -S
* 1.5(重要)：安装插件Vue.use(VueRouter);
* 2:在main.js中引入vue-router对象 impor VueRouter from './x.js'
* 3:创建路由对象 var router = new VueRouter();
* 4:配置路由规则 router.addRoutes({路由对象});
  * 路由对象(path:'锚点值',component:要(填坑)显示的组件)
* 5:将配置好的路由对象交给Vue对象
  * 在options中传递-->key叫做router
* 6:留坑(使用组件) `<router-view></router-view>`

#### router-link

* to
* 帮助我们生成a标签的href
* 锚点值代码维护不方便，如果需要改变锚点的名称
  * 则需要改变[使用次数+1(配置规则)]个地方的代码

#### 命名路由

* 1:给路由对象一个名称{name:'home',paht:'/home',component:Home}
* 2:在router-link的to属性中描述这个规则
  * `<router-link :to="{name:'home'}"></router-link>`
  * 通过名称找路由对象，获取其path,生成自己的href
* 大大地降低维护成本，锚点值改变只用在main.js中改变path属性即可

#### 阶段总结

* 使用步骤vue-router 1:引入2:安装插件3：创建路由实例4：配置路由规则5：将路由对象关联vue6:留坑 

* router-link to="xxx"  命名路由

  * 1.在路由对象中加入name属性
  * 2.在router-link中 ：to="{name'xxx'}"

* 生僻API梳理:

  * 1.Vue-use(插件对象)；	//过程中会注册一些全局组件，及给vm或者组件对象挂在属性

  * 2.给vm及组件对象挂载的方式：Object.defineProperty(Vue.prototype,'$router',{

    ​		get:function(){

    ​			return 自己的router对象

    ​		}

    })



#### 参数router-link

* Vue.prototype.xxx = {add:fn}
* 所有组件中，使用this.xxx就能拿到这个对象
* 查询字符串
  * 1：配置`to="{name:'detail',query:{id:hreo.id}}"`
  * 2：规则`{name:'detai',path:'/detail',component:Detail}`
  * 3：获取`this.$route.query.id`
  * 4：生成`<a href="/detail?id=1">`
* path方式
  * 4：生成`<a href="/detail/1">`
  * 1：配置：`to="{name:'detail',params:{id:hero.id}}"`
  * 2：规则`{name:'detail',path:'/detail/:id'}`
  * 3：获取 `this.$route.params.id`
* 查询字符串配置参数
  * router-link一次
  * 获取的时候一次
* path方式配置参数
  * router-link一次
  * 规则配置的时候声明位置
  * 获取的时候一次
* 总结书写代码注意事项
  * path方式需要在路由规则中声明位置

#### vue-router中的对象

* $route路由信息对象，只读对象
* $router路由操作对象，只写对象

#### 嵌套路由

* 市面上所谓的单页应用框架开发多页应用
  * 嵌套路由
* 案例
  * 进入我的主页显示：电影、歌曲
* 代码思想
  * 1：router-view的细分
    * router-view第一层中，包含一个router-view
  * 2：每一个坑挖好了，要对应单独的组件
* 使用须知：1：router-view包含router-view 2：路由children路由

#### 知识点介绍

* 路由meta元数据--->meta是对于路由规则是否需要验证配置
  * 路由对象中和name属性同级`{meta:{isChecked:true}}`
* 路由钩子-->权限控制的函数执行时期
  * 在每次路由匹配后，渲染组件到router-view之前
  * `router.beforeEach(function(){ to, from, next})`

#### 练习

* 1：使用Koa编写一个服务器...
  * a./login的请求...ctx.body = {msg:'ok'},前端用jq发送请求
* 2：客户端接收响应后，如果是ok,localStroage中保存该值
* 3：在全局路由守卫中，区分/login不验证(meta)，/show要验证，验证条件就是localStrage中获取

#### 编程导航

* 1：跳到指定的锚点，并显示页面`this.$router.push({name:'xxx',query:{id:1},params:{name:'bac'}})`
* 2：配置规则`{name:'xxx',path:'/xxx/:name'}`
* 3：根据历史记录，前进或回退
  * `this.$router.go(-1|1)`;
  * 1代表进一步，-1退一步