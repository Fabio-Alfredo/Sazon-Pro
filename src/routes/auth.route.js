const route = require('express').Router();
const { registerUserController,loginUserController  } = require('../controllers/auth.controller');
const { checkUser }= require('../middleware/checkUser.middleware')

route.post('/register', checkUser,  registerUserController);
route.post('/login',  loginUserController);
module.exports = route;