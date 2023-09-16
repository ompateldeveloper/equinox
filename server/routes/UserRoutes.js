const express = require("express");
const {loginUser,signupUser} = require("../controllers/userController");
// import {loginUser,signupUser} from "../controllers/userController"
const userRouter = express.Router();

userRouter.post("/login",loginUser);
userRouter.post("/signup",signupUser);



module.exports = userRouter;