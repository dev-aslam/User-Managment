const User = require('../models/userModel');
const passHash = require('../models/password');

const authController = {
    login:async(req,res)=>{
        const {email,password} = req.body;
        const isUser = await User.findOne({email});
        if (!isUser) {
            req.session.errorMessage = "Invalid email or password";
            res.redirect('/');
            return;
        }
        if (isUser.isAdmin) {
            req.session.errorMessage = "Admin login failed. Please use admin login page";
            return res.redirect('/admin');
        }
        if(await passHash.comparePassword(password,isUser.password)){
            req.session.user = {
                _id: isUser._id,
                fullName: isUser.fullName,
                email: isUser.email,
                mobileNo:isUser.mobileNo,
                isAdmin: isUser.isAdmin
            };
            res.redirect('/user_home');
        }else{
            req.session.errorMessage = "Invalid email or password";
            res.redirect('/');
            return;
        }
    },

    register:async(req,res)=>{
        const hashedPassword = await passHash.hashPassword(req.body.password)
        const newUser = new User({
        fullName:req.body.name,
        email:req.body.email,
        password:hashedPassword,
        mobileNo:req.body.mobileNo,
        isAdmin:false,
    });

        try{
            await User.create(newUser);
            req.session.successMessage = "User created successfully. Please login to continue.";
            res.redirect(`/`);

        }
        catch(err){
            console.log(err);
            req.session.errorMessage = "Registration failed.";
            res.redirect('/');
        }
    },

    adminLogin: async (req, res) => {
        const { email, password } = req.body;

        try {
            const adminUser = await User.findOne({ email });

            if (!adminUser || !adminUser.isAdmin) {
                req.session.errorMessage = "Invalid Login Credentials";
                return res.redirect('/admin');
            }
            if (await passHash.comparePassword(password, adminUser.password)) {
                req.session.admin = {
                    _id: adminUser._id,
                    fullName: adminUser.fullName,
                    email: adminUser.email,
                    mobileNo:adminUser.mobileNo,
                    isAdmin: adminUser.isAdmin
                };
                res.redirect('/admin/home'); 
            }
            else{
                req.session.errorMessage = "Invalid Login Credentials";
                return res.redirect('/admin');
            }
        } catch (err) {
            console.error('Admin login error:', err);
            req.session.errorMessage = "Admin login failed. Please try again later.";
            res.redirect('/admin');
        }
    }

}

module.exports = authController;