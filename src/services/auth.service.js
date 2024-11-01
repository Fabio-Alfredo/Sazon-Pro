import UserRepository from '../repositories/user.repository.js';
import TokeRepoisitory from '../repositories/toke.repoisitory.js';
import { generateToken } from '../utils/jwt.util.js';
import {authErrorCodes} from '../utils/error/auth.errorCodes.js';
import ServiceError from '../utils/error/service.error.js';


export const registerUser = async (user) => {
    try {
        const existUser = await UserRepository.exisUserByEmail(user.email);
        if(existUser) throw new ServiceError('User already exist', authErrorCodes.USER_ALREADY_EXIST);
        newUser = await UserRepository.create(user);
        return newUser;
    } catch (e) {
        throw new ServiceError(e.message, e.code || authErrorCodes.CREATE_USER_ERROR);
    }
}

export const loginUser = async (user, password) => {
    try{
        if(!user.comparePassword(password)) throw new ServiceError('Invalid credentials', authErrorCodes.INVALID_CREDENTIALS);

        const {token, expiredAt} = generateToken(user); 
        if(!token || !expiredAt) throw new ServiceError('Error generating token', authErrorCodes.TOKEN_GENERATION_ERROR);

        const newToke = await TokeRepoisitory.create(user._id, token, expiredAt);
        if(!newToke) throw new ServiceError('Error saving token', authErrorCodes.TOKEN_GENERATION_ERROR);

        await UserRepository.addToken(user._id, newToke._id);

        return {token, expiredAt};
    }catch(e){
        throw new ServiceError(e.message, e.code || authErrorCodes.INVALID_CREDENTIALS);
    }
}
