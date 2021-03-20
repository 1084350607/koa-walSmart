import mysql from 'mysql'
import config from './config'

var connection = mysql.createConnection(config);

connection.connect(); // 建立链接

function query(sql) {
    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        });
    })
}

export default query
