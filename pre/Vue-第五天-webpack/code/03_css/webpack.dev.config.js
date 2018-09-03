module.exports = {
    // 入口
    entry:{
        //可以有多个入口，如果一个，就默认从这一个入口开始分析
        'main':'./main.js'
    },
    //输出
    output:{
        filename:'./build.js'
    },

    //声明模块
    //包含着各个Loader
    module:{
        loaders:[   //webpack后面版本可以叫做rules
            { test:/\.css$/,loader:'style-loader!css-loader'},
            {test:/\.(jpg|png|gif|svg)$/,loader:'url-loader?limit=4096'}
        ]
    },
    // 监视文件发生改动，自动产出js
    watch:true
}