import { registerUserController, loginUserController } from '../controllers/auth.controller.js';
import { Router } from 'express';

const authRoute = Router();

authRoute.post('/register',  registerUserController);
authRoute.post('/login',  loginUserController);

export default authRoute;