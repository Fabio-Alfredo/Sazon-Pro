import { registerUserController, loginUserController } from '../controllers/auth.controller.js';
import { Router } from 'express';

const authRoute = Router();

authRoute.post('/login',  loginUserController);
authRoute.get('/register',  registerUserController);

export default authRoute;