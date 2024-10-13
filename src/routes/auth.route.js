const route = require('express').Router();
const { registerUserController } = require('../controllers/auth.controller');

route.post('/register', registerUserController);

module.exports = route;