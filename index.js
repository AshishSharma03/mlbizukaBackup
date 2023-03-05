const express = require("express");
const app = express();
const http = require("http");
const PORT = 5000

app.use('/',express.static('public'))


app.listen(PORT,()=>{
    console.log("Server listen on "+ PORT)
})
