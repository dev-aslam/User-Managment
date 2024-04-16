const user = require('../models/userModel');
const mongoose = require('mongoose')
const passHash = require('../models/password');

//User Login Page
exports.loginPage = async (req,res)=>{
    res.render('users/userLogin',{title:'Login'})
}

//New User Register Page
exports.register = async (req,res)=>{
    res.render('users/userRegister',{title:'Register'})
}

//New User Register Post
exports.addUser = async (req,res)=>{
    console.log(req.body);
    
}

//User Login
exports.userLogin = async (req,res)=>{
    console.log(req.body);
}

//User Home Page
exports.userHome = async (req,res)=>{
    res.render('users/userHome',{title: 'Home'});
}