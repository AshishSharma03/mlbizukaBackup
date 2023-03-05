const express = require("express");
const app = express();

const path = require("path");
const PORT = 5000

app.use('/',express.static('public'))
app.use('/',(req,res)=>{
    res.sendFile('index.html',{root:path.join(__dirname,"public")})
})

app.listen(PORT,()=>{
    console.log("Server listen on "+ PORT)
})
