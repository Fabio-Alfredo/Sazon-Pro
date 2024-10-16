const jwt = require('jsonwebtoken');
require('dotenv').config();

const KEY = process.env.JWT_SECRET;

const generateToken = (email, id)=>{
    const token = jwt.sign({email, id}, KEY, {expiresIn: '1h'});
    return {
        token,
        expiresIn: 3600
    };
}

module.exports={
    generateToken
}