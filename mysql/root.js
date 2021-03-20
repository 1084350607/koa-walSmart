import mysql from 'mysql'
import config from './config'

var connection = mysql.createConnection(config);

connection.connect(); // 建立链接

var sql = 'select * from user'; // 查询的表名
connection.query(sql, function (err, result) {
    if (err) {
        console.log('error', err.message);
        return;
    }
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
});

connection.end();