const UserRepository = require('../repositories/user.repository');

const existUser = async(email)=>{
    const exist = await UserRepository.exisUser(email);
    return exist;
}

module.exports = {
    existUser
}