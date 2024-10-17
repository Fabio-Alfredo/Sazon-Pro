const route = require('express').Router();
const { registerUserController,loginUserController  } = require('../controllers/auth.controller');

route.post('/register',  registerUserController);
route.post('/login',  loginUserController);
module.exports = route;