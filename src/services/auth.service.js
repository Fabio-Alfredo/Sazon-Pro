import UserRepository from '../repositories/user.repository.js';
import TokeRepoisitory from '../repositories/toke.repoisitory.js';
import { hashPassword, comparePassword } from '../utils/password.util.js';
import { generateToken } from '../utils/jwt.util.js';
import {authErrorCodes} from '../utils/error/auth.errorCodes.js';
import ServiceError from '../utils/error/service.error.js';


export const registerUser = async (user) => {
    try {
        const hashedPassword = await hashPassword(user.password);
        if (!hashedPassword) throw new ServiceError('Error hashing password', authErrorCodes.HASHING_ERROR);
        newUser = await UserRepository.create({ ...user, password: hashedPassword });
        return newUser;
    } catch (e) {
        throw new ServiceError(e.message, e.code || authErrorCodes.CREATE_USER_ERROR);
    }
}

export const loginUser = async (user, password) => {
    try{
        const isValidPassword = await comparePassword(password, user.password);
        if (!isValidPassword) throw new ServiceError('Invalid password', authErrorCodes.INCORRECT_PASSWORD);

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
