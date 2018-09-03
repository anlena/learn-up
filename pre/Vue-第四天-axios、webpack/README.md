#### axios

```js
Axios.method('url',[,..data],options)
.then(function(res){})
.catch(function(err){})
```

#### 合并请求

```js
this.$axios.all([请求1,请求2])
.then(this.$axios.spread(function(res1,res2){
    
}))
```

#### 取消请求

* API 3步骤

  ```js
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();	//创建标示请求的源对象

  this.source = source;	//将对象存储到组件
  CancelToken:source.token,	//请求的optinos属性
  this.source.cancel();		//取消到之前的那个请求

  //前端的断电续传	及时获取上传的文件大小，存储起来
  var file = <input type="file" />	files[0].slice(文件开始部分，文件结尾部分)
  new FormData().append('file',file)

  //后台就是接收多次文件，都往hbx.mp3文件上追加
  ```

  ​

#### 拦截器

* 请求拦截器：在发起请求之前可以做的事
* 响应拦截器：在响应回来以后，做的事


* 单请求配置options:`axios.post(url,data,optios);`
* 全局配置default：`this.$axios.defaults`
* config:`请求拦截中的参数`
* response.config`响应拦截器中的参数`
* options
  * baseURL 基础URL路径
  * params查询字符串对象（对象）
  * transformRequest：function(post请求的数据){ }转换请求体数据
  * transformRequest function(res){ 自己转换相应回来的数据 }转换响应体数据
  * headers 头部信息
  * data 请求体数据
  * timeout 请求超时，请求多久以后没有响应算是超时(毫秒)
  * headers 请求头信息
  * data 请求体数据
  * timeout 请求超时，请求多久以后没有响应算是超时（毫秒）