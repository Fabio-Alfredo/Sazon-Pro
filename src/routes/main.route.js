import { Router } from "express";
import authRoute from "./auth.route.js";

const mainRoute = Router();

mainRoute.use('/auth', authRoute);


export  {mainRoute};