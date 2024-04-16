const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
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

// const userSchema = new Schema();

module.exports = mongoose.model('User',Schema);