#### webpack打包模块的源码

* 1:把所有模块的代码放入到函数中，用一个数组保存起来
* 2:根据require时传入的索引，能知道需要哪段代码
* 3.从数组中，根据索引取出包含我们代码的函数
* 4.执行该函数,传入一个对象module.exports
* 5.我们的代码，按照约定，正好是module.exports="xxx"
* 6.调用函数结束后,module.exports从原来的空对象，就有值了
* 7.最终return module.exports，作为require函数的返回值

##### webpack.config.js文件配置

* entry是一个对象，程序的入口
  * key随意写
  * value入口文件
* output是一个对象产出的资源
  * key:filename
  * value:生成的build.js
* module模块对象（对象）
  * loaders:[]
    * 存在一些loade：`{test:正则，loader:'style-loader！css-loader'}`

#### 处理css

* import './xxx.css';
* import './1.jpg'

#### 处理less

* `loader:'style-loader!css-loader!less-loader'`

#### 处理ES6

* `babel-loader + babel-preset-env(es2015/2016/2017)`

#### 处理文件+ base64

* url-loader可以将文件生成为base64编码，到build.js中
* 文件在base64加密后会比原来大三分之一
* 应用场景是比较小的图片4kb以内的图片

#### 字符串内使用的内置变量

* name:`[name].[ext]`
* name是获取原文件名，ext是获取原文件名的后缀
* output:{path:'绝对路径','设置产出的资源目录,filename:'build.js'}

#### 处理Html

* html-webpack-plugin
* 1:下载
* 2:在webpack.config.js文件引入
* 3:plugins属性中，配置该对象
* 4:给其他options设置template（参照物）

#### 单文件方式

* 依赖vue-loader
* vue-template-compiler

#### webpack-dev-server

* --open	自动打开浏览器
* --hot       热替换，不在刷新的情况下替换，css样式
* --inline    自动刷新
* --port     指定端口
* --process显示编译进度

#### 包的分类管理和分类恢复

* 1:安装包的时候，被一个分类的管理
  * 开发依赖(打包相关webpack) npm | 包名 -D	---devDependencies
  * 生产依赖(不包含webpack包依赖) npm | 包名 -S    ---dependencies
* 2:恢复依赖
  * 如果包文件不小心删了，少了
  * 开发恢复 `npm i`
  * 生产恢复`npm i --prodution`

