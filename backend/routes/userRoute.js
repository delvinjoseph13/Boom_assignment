import express from 'express';
import { userLogin, userRegister } from '../controller/userContoller.js';
const userRoute=express.Router();

userRoute.post('/register',userRegister);
userRoute.post('/login',userLogin);

export default userRoute;