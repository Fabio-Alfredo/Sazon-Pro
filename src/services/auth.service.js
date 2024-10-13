const UserRepository = require('../repositories/user.repository');

const registerUser = async (user)=>{
    return await UserRepository.create(user);
}

module.exports = {
    registerUser
}