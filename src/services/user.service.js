const UserRepository = require('../repositories/user.repository');

const existUserByEmail = async(email)=>{
    const exist = await UserRepository.exisUser(email);
    return exist;
}

module.exports = {
    existUserByEmail
}