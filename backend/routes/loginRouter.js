const express=require('express');
const userController = require('../controllers/loginCtrl');
const isAuthenticated = require('../middleware/isAuth');

const userRouter=express.Router();
//register
userRouter.post("/api/v1/users/register",userController.register);
//login
userRouter.post("/api/v1/users/login",userController.login);
module.exports=userRouter;