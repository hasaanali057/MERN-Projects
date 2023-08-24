// module imports
import { NextFunction, Request, Response } from 'express';

// Importing Bcrypt Class
import bcrypt from 'bcrypt';

// IMporting User Model Class
import User from '../../models/User';

// Importing Status Codes
import { StatusCodes } from '../../config/common/statusCodes';

//IMporting Responce Messages
import { ResponseMessages } from '../../config/common/errorMessages';

//Importing  Express Validator modules
import { validationResult, check } from 'express-validator';

import { validationErrorFunction } from '../../config/common/validationErrorHandler';

// Defining SignUp validation Function
const signUpValidationRules = () => {
  return [
    // check('username').notEmpty().withMessage('Username is required.'),
    check('fullname').notEmpty().withMessage('Full name is required.'),
    check('email').notEmpty().withMessage('Email is required.').isEmail().withMessage('Invalid email format.'),
    check('password').notEmpty().withMessage('Password is required.').isLength({ min: 8 }).withMessage('Password Must be atleast 8 characters'),
    //check('phonenumber').notEmpty().withMessage('Phone number is required.'),
  ];
};

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns
 */
const SignUpMiddleWare = async (req : Request, res: Response, next: NextFunction) => {
  const validationErrors = validationErrorFunction(res, req);
  if(validationErrors?.length){
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: validationErrors });
  }
  else{
    next();
  }
};

// Defining SignIn validation Function
const signInValidationRules = () => {
  return [
    check('email').notEmpty().withMessage('Email is required.').isEmail().withMessage('Invalid email format.'),
    check('password').notEmpty().withMessage('Password is required.').isLength({ min: 8 }).withMessage('Password Must be atleast 8 characters')
  ];
};

// Defining SignIn middleware function
const SignInMiddleware = async (req : Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  validationErrorFunction(res, req);
  try {
    const user = await User.findOne({ email });

    if(!user){
      return res.status(StatusCodes.NOT_FOUND).json({
        error: ResponseMessages.USER_NOT_FOUND
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if(!checkPassword){
      return res.status(StatusCodes.UNAUTHORIZED).json({
        error: ResponseMessages.INVALID_CREDENTIALS,
      });
    }
  } catch (error) {
    res.status(StatusCodes.SERVER_ERROR).json({
      error: ResponseMessages.SERVER_ERROR
    });
  }

  next();
};

// Defigning Forget Password Middleware
const ForgetPasswordMiddleWare = async (req : Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  if(!email){
    res.status(StatusCodes.BAD_REQUEST).json({
      error: ResponseMessages.EMAIL_EMPTY
    });
  }
  next();
};

// Defining Verify OTP MiddleWare
const VerifyOTPMiddleWare = async (req : Request, res: Response, next: NextFunction) => {
  next();
};

// Defining Reset Password MiddleWare
const ResetPasswordMiddleWare = async (req : Request, res: Response, next: NextFunction) => {
  const { email, NewPassword, ConfirmNewPassword } = req.body;
  if(!email || !NewPassword || !ConfirmNewPassword){
    res.status(StatusCodes.BAD_REQUEST).json({
      error: ResponseMessages.EMAIL_EMPTY
    });
  }else{
    next();
  }

};

// Exporting MiddleWares
export {
  SignUpMiddleWare, signUpValidationRules,
  SignInMiddleware, signInValidationRules,
  ForgetPasswordMiddleWare,
  VerifyOTPMiddleWare,
  ResetPasswordMiddleWare
};