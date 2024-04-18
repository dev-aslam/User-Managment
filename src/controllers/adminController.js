const authController = require("./authController");
const User = require('../models/userModel');
const passHash = require('../models/password')

//GET admin login
exports.loginpage = async (req, res) => {
  if (req.session.admin) {
    res.redirect("/admin/home");
  } else {
    const errorMessage = req.session.errorMessage;
    const successMessage = req.session.successMessage;

    req.session.errorMessage = null;
    req.session.successMessage = null;

    res.render("admin/adminLogin", {
      title: "Login",
      errorMessage,
      successMessage,
    });
  }
};

//POST ADMIN LOGIN
exports.loginAdmin = async (req, res) => {
  console.log(req.body);
  await authController.adminLogin(req, res);
};

//GET Admin Dashboard
exports.adminHome = async (req, res) => {
  if (req.session.admin) {
    const { _id, fullName, email, mobileNo } = req.session.admin;
    res.render("admin/adminHome",{
        title: "Admin Home",
        adminId: _id,
        fullName: fullName,
        email: email,
        mobileNo: mobileNo,
      });
  } else {
    req.session.errorMessage = "Please Login to countinue";
    res.redirect("/admin");
  }
};

//admin dashboard
exports.adminDashboard = async(req,res) =>{
  if (req.session.admin) {
    try{
    const errorMessage = req.session.errorMessage;
    const successMessage = req.session.successMessage;

    req.session.errorMessage = null;
    req.session.successMessage = null;
      const users = await User.find({isAdmin:false});
      res.render('admin/adminDashboard',{title: 'Admin Dashboard', users,errorMessage,successMessage});
    }catch(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  }
  else {
    req.session.errorMessage = "Please Login to countinue";
    res.redirect("/admin");
  }
}

//admin edit page
exports.adminUserEdit = async(req,res)=>{
  if(req.session.admin){
    const userID = req.query.id;
    const user = await User.findOne({_id:userID});
    res.render("admin/adminUserEdit",{title:'Edit',user});
  }else{
    req.session.errorMessage = "Please Login to countinue";
    res.redirect("/admin");
  }
}

//post admin edit
exports.adminUserUpdate = async(req,res)=>{
  if(req.session.admin){
    const userID = req.query.id;
  const userData = await User.findByIdAndUpdate(userID, {
    fullName: req.body.name,
    email: req.body.email,
    mobileNo: req.body.mobileNo,
    password: await passHash.hashPassword(req.body.password)
});
  if(userData){
      req.session.successMessage = 'User Details Updated'
      res.redirect('/admin/dashboard')
    }
    else{
      req.session.errorMessage = 'Server Error, User Details not updated'

      res.redirect('/admin/dashboard')
    }
  }
  else{
    req.session.errorMessage = "Please Login to countinue";
    res.redirect("/admin");
  }
}

//admin user DeletePage
exports.adminUserDeletePage = async (req,res)=>{
  if(req.session.admin){
    const userID = req.query.id;
    const user = await User.findOne({_id:userID});
    res.render("admin/adminUserDelete",{title:'Edit',user});
  }else{
    req.session.errorMessage = "Please Login to countinue";
    res.redirect("/admin");
  }
}

//admin user Delete 
exports.adminUserDelete = async (req, res) => {
  if(req.session.admin){
    try {
      const userId = req.query.id;
      const deletedUser = await User.findByIdAndDelete(userId);

      if (!deletedUser) {
          req.session.errorMessage = 'User not found';
      } else {
          req.session.successMessage = 'User deleted successfully';
      }

      res.redirect('/admin/dashboard');
  } catch (err) {
      console.error('Error deleting user:', err);
      req.session.errorMessage = 'Error deleting user. Please try again.';
      res.redirect('/admin/dashboard');
  }
  }
  else{req.session.errorMessage = "Please Login to countinue";
  res.redirect("/admin");

  }
};

exports.logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/admin");
  });
};

