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

#### 拦截器

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