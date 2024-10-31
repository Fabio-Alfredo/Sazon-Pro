import { updatePassword, existUserByEmail  } from "../services/user.service";

import { userErrorCodes } from "../utils/error/user.errorCodes";
import createError from 'http-errors';


export const updatePasswordController = async (req, res, next) => {
    try{
        const{password, email} = req.body;
        const user = await existUserByEmail(email);
        if(!user) throw createError(400, 'User not found');

        const updatedUser = await updatePassword(user, password);
        res.status(200).json(updatedUser);
    }catch(e){
        switch(e.code){
            case userErrorCodes.PASSWORD_HASHING_FAILED:
                next(createError(400, 'Error hashing password'));
                break;
            case userErrorCodes.USER_UPDATE_FAILED:
                next(createError(400, 'Error updating password'));
                break;
            default:
                next(createError(e.status, e.message));
        }
    }
}