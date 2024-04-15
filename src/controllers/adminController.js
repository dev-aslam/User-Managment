exports.loginpage = async (req,res)=>{
    res.render('admin/adminLogin',{title:'Login'})
}

exports.loginAdmin = async (req,res)=>{
    console.log(req.body);
    res.render('admin/adminLogin',{title:'Login'});
}