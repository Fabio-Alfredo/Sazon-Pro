const UserRepository = require('../repositories/user.repository');
const {hashPassword} = require('../utils/password.util');
const {existsUser} = require('./user.service');

const registerUser = async (user)=>{

    const hashedPassword = await hashPassword(user.password);
    newUser = await UserRepository.create({...user, password: hashedPassword});
    return newUser;
}

module.exports = {
    registerUser
}