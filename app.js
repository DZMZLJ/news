// 入口文档
// 导包
const express = require('express');
const router = require('./router');
const bodyparser = require('body-parser');
// 实例化
const app = express();
// 统一自己静态资源
app.use("/public",express.static("./public"));
// 统一第三方包
app.use("/node_modules",express.static("./node_modules"));
// 配置模板引擎
app.engine('html',require('express-art-template'));
// 配置body-parser包 
app.use(bodyparser.urlencoded({extendde: false}));
app.use(bodyparser.json());
// 搭建服务器
// 挂载路由
app.use(router);
// 监听端口
app.listen(12121,() => {
    console.log("1111");
}); 