const authController = require("./authController");

//User Login Page //GET
exports.loginPage = async (req, res) => {
  if (req.session.user) {
    res.redirect("/user_home");
    console.log(req.session.user);
  } else {
    const errorMessage = req.session.errorMessage;
    const successMessage = req.session.successMessage;
    req.session.errorMessage = null;
    req.session.successMessage = null;
    
    res.render("users/userLogin", {
      title: "Login",
      errorMessage,
      successMessage,
    });
  }
};

//User Login //POST
exports.userLogin = async (req, res) => {
  console.log(req.body);
  await authController.login(req, res);
};

//New User Register Page //GET
exports.register = async (req, res) => {
  res.render("users/userRegister", { title: "Register" });
};

//New User Register Post //POST
exports.addUser = async (req, res) => {
  console.log(req.body);
  await authController.register(req, res);
};

//User Home Page
exports.userHome = async (req, res) => {
  if (req.session.user) {
    const { _id, fullName, email, mobileNo } = req.session.user;
    res.render("users/userHome",{
        title: "Home",
        userId: _id,
        fullName: fullName,
        email: email,
        mobileNo: mobileNo,
      });
  } else {
    req.session.errorMessage = "Please Login to countinue";
    res.redirect("/");
  }
};

exports.logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
};
