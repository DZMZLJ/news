// 入口文档
// 导包
const express = require('express');
const router = require('./router');
// 实例化
const app = express();
// 搭建服务器
// 挂载路由
app.use(router);
// 监听端口
app.listen(12121,() => {
    console.log("1111");
});