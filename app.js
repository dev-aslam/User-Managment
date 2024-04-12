const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv')
const port = 8080;

dotenv.config();
app.set('view engine','ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render("Login",{variable_name:"Hello World"})
})

app.listen(port,(req,res)=>{
    console.log(`server started at port ${port}`)
})