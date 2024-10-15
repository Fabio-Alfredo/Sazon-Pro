const { existUser } = require('../services/user.service');

const checkUser = async (req, res, next) => {

    const { email } = req.body;
    if(!email) return res.status(400).json({ message: 'Email is required' });
    
    try {
        
        const exist = await existUser(email);
        if (exist) return res.status(400).json({ message: 'User already exists' });
        next();
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }

}

module.exports = {checkUser};