const {registerUser, loginUser}  = require('../services/auth.service');
const {existUser} = require('../services/user.service');

const registerUserController = async (req, res) => {
    try {
        const user = req.body
        const userExist = await existUser(user.email);
        if(userExist) throw new Error('User already exist');
        
        const newUser = await registerUser(user);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const loginUserController = async(req, res)=>{
    try{
        const {email, password}=req.body;
        const user = await existUser(email);
        if(!user) throw new Error('User not found');

        const token = await loginUser(user, password);
        res.status(200).json(token);
    }catch(e){
        res.status(400).json({message: e.message});
    }
}

module.exports = {
    registerUserController,
    loginUserController
}
