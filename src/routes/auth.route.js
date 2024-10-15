const route = require('express').Router();
const { registerUserController } = require('../controllers/auth.controller');
const { checkUser }= require('../middleware/checkUser.middleware')

route.post('/register', checkUser,  registerUserController);

module.exports = route;