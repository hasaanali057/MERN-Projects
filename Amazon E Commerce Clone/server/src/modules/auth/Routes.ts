// Importing Express modules
import express from 'express';

const authRouter = express.Router();

// Importing USER AUTH Middlewares
import {
  SignUpMiddleWare, signUpValidationRules,
  SignInMiddleware, signInValidationRules,
  ForgetPasswordMiddleWare,
  VerifyOTPMiddleWare,
  ResetPasswordMiddleWare
}
  from './Middleware';

// Importing USER AUTH COntrollers
import {
  Signin,
  SignUp,
  FogetPassword,
  VerifyOTP,
  ResetPassword
}
  from './Controller';

// User SignUp Routes
authRouter.post('/signUp', signUpValidationRules(), SignUpMiddleWare, SignUp);

// User SignIn Routes
authRouter.post('/login', signInValidationRules(), SignInMiddleware, Signin);

// User Forget Password Routes
authRouter.post('/updatePassword', ForgetPasswordMiddleWare, FogetPassword);

// Verify OTP Routes
authRouter.post('/verifyOTP', VerifyOTPMiddleWare, VerifyOTP);

// Reset Password Routes
authRouter.post('/resetPassword', ResetPasswordMiddleWare, ResetPassword);

// Exporting Routes
export {
  authRouter
};