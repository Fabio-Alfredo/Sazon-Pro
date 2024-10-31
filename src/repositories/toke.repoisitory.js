import { Token } from "../models/token.model.js";

class TokenRepository {
    constructor(token) {
        this.model = token;
    }

    async create(userId, token, expiredAt) {
        return await this.model.create({ userId, token, expiredAt });
    }
}

export default new TokenRepository(Token);