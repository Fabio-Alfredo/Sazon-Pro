const UserRepository = require('../repositories/user.repository');
const {hashPassword} = require('../utils/password.util');
const {existsUser} = require('./user.service');

const registerUser = async (user)=>{
    const exist = await existsUser(user.email);
    if(exist){
        throw new Error('User already exists');
    }
    const hashedPassword = await hashPassword(user.password);
    newUser = await UserRepository.create({...user, password: hashedPassword});
    return newUser;
}

module.exports = {
    registerUser
}