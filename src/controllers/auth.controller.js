const {registerUser}  = require('../services/auth.service');
const {existUser} = require('../services/user.service');

const registerUserController = async (req, res) => {
    try {
        const user = req.body;
        
        const newUser = await registerUser(user);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    registerUserController
}
