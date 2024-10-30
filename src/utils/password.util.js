import { hash, compare } from 'bcrypt';
import 'dotenv/config';


const salt = process.env.SALT_ROUNDS;

export const hashPassword = async (pass)=>{
    return await hash(pass, parseInt(salt));
    
}

export const comparePassword = async (pass, hash)=>{
    const result = await compare(pass, hash);
    return result;
}
