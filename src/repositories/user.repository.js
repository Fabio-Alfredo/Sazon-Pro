const User = require('../models/user.model');

class UserRepository{
    constructor(user){
        this.model = user;
    }

    async create(user){
        return await this.model.create(user);
    }

    async getAll(){
        return await this.model.find();
    }

    async getById(id){
        return await this.model.findById(id);
    }

    async update(id, user){
        return await this.model.findByIdAndUpdate(id, user, {new:true});
    }

    async delete(id){
        return await this.model.findByIdAndDelete(id);
    }
}

module.exports = new UserRepository(User);