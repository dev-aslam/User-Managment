const mongoose = require('mongoose');

const Schema = new mongoose.Schema();

const userSchema = new Schema({
    fullName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    mobileNo:{
        type:String,
        trim:true
    },
    address:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        required:true
    }
});

module.exports = mongoose.model('user',userSchema);