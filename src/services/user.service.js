const UserRepository = require('../repositories/user.repository');

const existUser = async(email)=>{
    const exist = await UserRepository.exisUser(email);
    if(!exist) throw new Error('User does not exist');
    return exist;
}

module.exports = {
    existUser
}