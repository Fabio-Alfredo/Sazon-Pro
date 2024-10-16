const UserRepository = require('../repositories/user.repository');
const {hashPassword, comparePassword} = require('../utils/password.util');
const {generateToken}= require('../utils/jwt.util');


const registerUser = async (user)=>{

    const hashedPassword = await hashPassword(user.password);
    newUser = await UserRepository.create({...user, password: hashedPassword});
    return newUser;
}

const loginUser = async (user, password)=>{
    const isValid = await comparePassword(password, user.password);
    
    if(!isValid) throw new Error('Invalid password');

    const token = generateToken(user);
    return token;
}

module.exports = {
    registerUser,
    loginUser
}