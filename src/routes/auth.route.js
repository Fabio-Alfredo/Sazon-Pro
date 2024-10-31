import { registerUserController, loginUserController } from '../controllers/auth.controller.js';
import { Router } from 'express';

const authRoute = Router();

authRoute.post('/login',  loginUserController);
// authRoute.post('/register',  registerUserController);
authRoute.post('/create',  registerUserController);

export default authRoute;