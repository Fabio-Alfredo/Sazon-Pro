import UserRepository from '../repositories/user.repository.js';
import ServiceError from '../utils/error/service.error.js';
import {userErrorCodes} from '../utils/error/user.errorCodes.js';
import {hashPassword} from '../utils/password.util.js';
import { comparePassword } from '../utils/password.util.js';

export const existUserByEmail = async (email) => {
    try {
        const exist = await UserRepository.exisUserByEmail(email);
        return exist ;
    } catch (e) {
        console.log(e);
        throw new ServiceError(e.message, e.code || userErrorCodes.USER_FETCH_FAILED);
    }

}


export const updatePassword = async (user, password, newPassword)=>{
    try{
        const isValidPassword = await comparePassword(password, user.password);
        if(!isValidPassword) throw new ServiceError('Invalid password', userErrorCodes.INVALID_PASSWORD);

        const hashedPassword = await hashPassword(newPassword);
        if(!hashedPassword) throw new ServiceError('Error hashing password', userErrorCodes.PASSWORD_HASHING_FAILED);

        const updatedUser = await UserRepository.updatePassword(user._id, hashedPassword);
        return updatedUser
    }catch(e){
        throw new ServiceError(e.message, e.code || userErrorCodes.USER_UPDATE_FAILED);
    }
}

