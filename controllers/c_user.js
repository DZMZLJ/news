// 导包
const M_user = require('../models/m_user');

// 渲染登陆页
exports.showSignin = (req, res) => {
    // res.send("3333333");
    res.render("signin.html");
};
// 处理登陆请求
exports.handleSignin = (req, res) => {
    const body = req.body;
    // console.log(body);
    // 验证邮箱
    M_user.checkEmail(body.email,
        (err, data) => {
            if (err) {
                throw err;
            }
            // console.log(data);
            if (data.length === 0) {
                return res.send({
                    code: 1,
                    msg: "邮箱不存在"
                })
            }
            // console.log(data);

            // 验证密码
            if (data[0].password !== body.password) {
                return res.send({
                    code: 2,
                    msg: "密码错误"
                })
            }
            // 返回成功状态码
            res.send({
                code: 200,
                msg: "可以登陆"
            });
        });

};