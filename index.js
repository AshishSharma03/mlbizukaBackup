const express = require("express");
const app = express();
const http = require("http");
const PORT = 5000

app.use('/ss',express.static('public'))
app.use('/',(req,res)=>{
    res.json("connect")
})

app.listen(PORT,()=>{
    console.log("Server listen on "+ PORT)
})
