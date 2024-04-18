require('dotenv').config();
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const session = require('express-session');


const app = express();
const port = process.env.PORT || 8080;

//setting up session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));


//setting view engine 
app.use(expressLayouts);
app.set('view engine','ejs')

//connect DB
connectDB();

//body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname,'/public')));
app.use('/admin', express.static(path.join(__dirname, '/public')));

//setting views folder
app.set('views',path.join(__dirname,'/src/views/'));

//Routes
//user Routes
app.use('/',require('./src/routes/userRoutes'));
//Admin Route
app.use('/admin',require('./src/routes/adminRoutes'));
//404
app.get('*',(req,res)=>{
    res.status(404);
    res.render('notfound',{title:"404"})
})

//starting server
app.listen(port,()=>{
    console.log(`server started at port ${port}`)
    console.log(`http://localhost:${port}`);
});