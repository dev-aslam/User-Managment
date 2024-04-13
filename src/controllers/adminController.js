exports.loginpage = async (req,res)=>{
    res.render('admin/adminLogin',{title:'Login'})
}

exports.register = async (req,res)=>{
    res.render('admin/adminRegister',{title:'Register'})
}