// 导入
const connection = require('../config/db_config');

// 查询邮箱
exports.checkEmail = (email,callback) => {
    const sqlstr = 'select * from `users` where email=?';
    connection.query(sqlstr,email, (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null,data);
    });

};