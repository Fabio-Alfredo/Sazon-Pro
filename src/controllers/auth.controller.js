import { registerUser, loginUser } from '../services/auth.service.js';
import { existUserByEmail } from '../services/user.service.js';
import { authErrorCodes } from '../utils/error/auth.errorCodes.js';
import { userErrorCodes } from '../utils/error/user.errorCodes.js';
import createError from 'http-errors'

export const registerUserController = async (req, res, next) => {
    try {
        const user = req.body

        const newUser = await registerUser(user);
        res.status(201).json(newUser);
    } catch (e) {
        switch (e.code) {
            case authErrorCodes.HASHING_ERROR:
                next(createError(404, 'Error password hash',));
                break;
            case authErrorCodes.CREATE_USER_ERROR:
                next(createError(400, 'Error create user'));
                break;
            case userErrorCodes.USER_FETCH_FAILED:
                next(createError(400, 'Error fetching user'));
                break;
            default:
                next(createError(e.status, e.message))
        }
    }
}

export const loginUserController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await existUserByEmail(email);
        if (!user) throw createError(400, 'User not found');

        const token = await loginUser(user, password);
        res.status(200).json(token);
    } catch (e) {
        switch (e.code) {
            case userErrorCodes.USER_FETCH_FAILED:
                next(createError(400, 'Error fetching user'));
                break;
            case authErrorCodes.INVALID_CREDENTIALS:
                next(createError(400, 'Invalid credentials'));
                break;
            case authErrorCodes.INCORRECT_PASSWORD:
                next(createError(400, 'Invalid credential'));
                break;
            case authErrorCodes.TOKEN_GENERATION_ERROR:
                next(createError(400, 'Error generating token'));
                break;
            default:
                next(createError(e.status, e.message))
        }

    }
}
