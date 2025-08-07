import {RegisterUser, LoginUser, userCredits} from '../Controllers/UserController.js';
import express from 'express';
import userAuth from '../Middlewares/Auth.js';

const router = express.Router();

const UserRoutes = () =>{
    router.post("/register" , RegisterUser);
    router.post("/login" , LoginUser);
    router.post("/credits" ,userAuth, userCredits)
    return router;
}

export default UserRoutes;