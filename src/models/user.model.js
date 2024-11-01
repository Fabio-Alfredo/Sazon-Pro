import { Schema, model } from 'mongoose';
import { hash, compare } from 'bcrypt';

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: [String],
        enum: ['admin', 'user', 'moderator'],
        default: ['user']
    },
    avatar: String,
    token: {
        type: Schema.Types.ObjectId,
        ref: 'Token'
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await hash(this.password, 10);
    }
    next();
})


userSchema.methods.comparePassword = async function(pass){
    const result = await compare(pass, this.password);
    return result;
}


const User = model('User', userSchema);

export {
    User
}