const bcrypt = require('bcrypt');
const saltRounds = 12;

const User = {
    hashPassword: async (plainPassword)=>{
        const salt = await bcrypt.genSalt(saltRounds);
        const hashPass = await bcrypt.hash(plainPassword,salt);
        return hashPass;
    },
    comparePassword: async(plainPassword,hashPass)=>{
        const match = await bcrypt.compare(plainPassword,hashPass);
        return match;
    }
}

module.exports = User;