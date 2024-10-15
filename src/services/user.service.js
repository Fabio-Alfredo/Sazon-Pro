const UserRepository = require('../repositories/user.repository');

const existsUser = async(email)=>{
    const exist = await UserRepository.exisUser(email);
    return exist;
}

module.exports = {
    existsUser
}