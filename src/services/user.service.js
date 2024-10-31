import UserRepository from '../repositories/user.repository.js';
import ServiceError from '../utils/error/service.error.js';
import {userErrorCodes} from '../utils/error/user.errorCodes.js';

export const existUserByEmail = async (email) => {
    try {
        const exist = await UserRepository.exisUserByEmail(email);
        return exist || null;
    } catch (e) {
        console.log(e);
        throw new ServiceError(e.message, e.code || userErrorCodes.USER_FETCH_FAILED);
    }

}

