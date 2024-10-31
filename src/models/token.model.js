import { Schema, model } from "mongoose";

const tokenSchema = new Schema({
    token: {
        type: String,
        unique: true,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    expiredAt: {
        type: Date,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

const Token = model('Token', tokenSchema);

export {
    Token
}