import jwt from 'jsonwebtoken';
import 'dotenv/config';

const KEY = process.env.JWT_SECRET;

export const generateToken = (email, id)=>{
    const token = jwt.sign({email, id}, KEY, {expiresIn: '1h'});
    const expiredAt = new Date(Date.now() + 3600000);
    return {
        token,
        expiredAt
    };
}
