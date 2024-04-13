require('dotenv').config();
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts')

const app = express();
const port = 8080 || process.env.PORT;

//setting view engine 
app.use(expressLayouts);
app.set('view engine','ejs')

//body parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//setting views folder
app.set('views',path.join(__dirname,'/src/views/'))

/*
app.set('views',[path.join(__dirname,'/src/views/'), 
path.join(__dirname,'/src/views/admin/'), 
path.join(__dirname,'/src/views/users/')]);
*/

//Routes
app.use('/',require('./src/routes/userRoutes'))

//starting server
app.listen(port,()=>{
    console.log(`server started at port ${port}`)
    console.log(`http://localhost:${port}`);
});