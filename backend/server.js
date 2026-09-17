const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

app.use(express.json())
app.use(express.static(path.join(__dirname , '../frontend')))

app.listen(process.env.PORT , () =>{
    console.log('server running port :'+ process.env.PORT);
    
})