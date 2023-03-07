const express = require("express");
const app = express();
// var httpsRedirect = require('express-https-redirect')
const path = require("path");
const PORT = 5000
// app.use('/', httpsRedirect(true));
app.use('/',express.static('public'))
app.use('/',(req,res)=>{
    res.sendFile('index.html',{root:path.join(__dirname,"public")})
})

app.use('/Post',(req,res)=>{
    res.sendFile('index.html',{root:path.join(__dirname,"public")})
})

app.listen(PORT,()=>{
    console.log("Server listen on "+ PORT)
})
