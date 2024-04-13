exports.loginPage = async (req,res)=>{
    res.render('users/userLogin',{title:'Login'})
}

exports.register = async (req,res)=>{
    res.render('users/userRegister',{title:'Register'})
}