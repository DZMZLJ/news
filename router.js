// 导包
const express = require('express');
const c_user = require("./controllers/c_user");
// 实例化路由
const router = express.Router();
// 监听请求找方法
router.get("/signin",c_user.showSignin);
router.post("/signin",c_user.handleSignin);

// 导出router
module.exports = router;