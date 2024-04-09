const express = require('express');
const app = express();
const port = 8080;

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.listen(port,(req,res)=>{
    console.log(`server started at port ${port}`)
})