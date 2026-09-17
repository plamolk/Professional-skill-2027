const mysql = require('mysql2');

const config = mysql.createPool({
    host: 'localhost',
    port:'3307',
    user: 'root',
    password: '1234',
    database: 'skill'
})



module.exports = {config};