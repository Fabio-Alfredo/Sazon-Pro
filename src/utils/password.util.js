const bcrypt = require('bcrypt');
require('dotenv').config();

const salt = process.env.SALT_ROUNDS;

const hashPassword = async (pass)=>{
    return await bcrypt.hash(pass, parseInt(salt));
    
}

const comparePassword = async (pass, hash)=>{
    const result = await bcrypt.compare(pass, hash);
    return result;
}

module.exports = {
    hashPassword,
    comparePassword
}