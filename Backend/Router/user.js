const express = require('express');
const userRouter = express.Router();
const {home, register, login, user} = require('../Controllers/user')
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const tokenMiddleware = require('../middlewares/tokenMiddleware');
// const adminMiddleware = require('../middlewares/adminMiddleware');

userRouter.route('/') .get(home);
userRouter.route('/reg').post(validate(signupSchema), register);
userRouter.route('/login').post(login);
userRouter.route('/user').get(tokenMiddleware,user);

module.exports = userRouter;