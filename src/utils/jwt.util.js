import jwt from 'jsonwebtoken';
import 'dotenv/config';

const KEY = process.env.JWT_SECRET;

export const generateToken = (email, id)=>{
    const token = jwt.sign({email, id}, KEY, {expiresIn: '1h'});
    return {
        token,
        expiresIn: 3600
    };
}
