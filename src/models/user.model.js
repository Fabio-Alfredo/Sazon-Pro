import { Schema, model } from 'mongoose';

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
    createAt: {
        type: Date,
        default: Date.now
    }
})

const User = model('User', userSchema);

export {
    User
}