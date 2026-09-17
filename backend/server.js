const express = require('express');
const app = express();
const path = require('path');
const db =  require('./src/config/db')
require('dotenv').config();

db.config.getConnection((err, connection) => {
    if (err) {
        console.log('connect error:', err); // เพิ่ม .message เพื่อดูสาเหตุที่แท้จริง
    } else {
        console.log('connect success');
        connection.release(); // ทดสอบเสร็จแล้วต้องคืนสายเชื่อมต่อกลับลง Pool
    }
});

app.use(express.json())
app.use(express.static(path.join(__dirname , '../frontend')))

app.listen(process.env.PORT , () =>{
    console.log('server running port :'+ process.env.PORT);
    
})