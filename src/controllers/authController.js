const User = require('../models/userModel');
const passHash = require('../models/password');

const authController = {
    login:async(req,res)=>{

        const {email,password} = req.body;
        const isUser = user.findOne(u=>u.email===email);
        if(isUser && await passHash.comparePassword(password,isUser.password)){
            res.redirect('/user_home');
        }else{
            res.render('users/userLogin',{title:'Login'})
        }
    },

    register:async(req,res)=>{
        const hashedPassword = await passHash.hashPassword(req.body.password)
        const newUser = new user({
        fullName:req.body.name,
        email:req.body.email,
        password:hashedPassword,
        isAdmin:false
    });

    try{
        await user.create(newUser);
        res.redirect('/');
    }catch(err){
        console.log(err);
    }
    }
}