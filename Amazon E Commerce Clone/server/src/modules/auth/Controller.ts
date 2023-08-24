// Importing Express Modules
import { Request, Response } from 'express';

// Importing User Schema file
import User from '../../models/User';

// JWT module Import
import jwt from 'jsonwebtoken';

// Importing bcrypt
import bcrypt from 'bcrypt';

// Importing Winston Logger
import Logger from '../../Utils/Debugger';

// Importing Status Codes
import { StatusCodes } from '../../config/common/statusCodes';

//IMporting Responce Messages
import { ResponseMessages } from '../../config/common/errorMessages';

//Dotenv Imports
import dotenv from 'dotenv';
dotenv.config();

// Importing OTP Constant
import  { generateOTP, sendEmail } from './Constants';

/**
 * Creates a New User
 * @param req
 * @param res
 * @returns
 */
const SignUp = async (req: Request, res: Response) => {
  const { username, fullname, email, password, phonenumber } = new User(req.body);

  const encryptedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    username: username,
    fullname: fullname,
    email: email,
    password: encryptedPassword,
    phonenumber: phonenumber
  });

  try {
    await user.save();
    return res.send(ResponseMessages.REGISTER_SUCCESS);
  } catch (error) {
    res.status(StatusCodes.SERVER_ERROR).send(error);
  }
};

/**
 * SignIn A User If Exists
 * @param req
 * @param res
 */
const Signin = async (req: Request, res: Response) => {
  const user = new User(req.body);
  const token = jwt.sign({ userId: user._id }, (String)(process.env.JWTKEY), {
  expiresIn: '1h',
  });
  try {
    res.json({ user, token });
  } catch (error) {
    res.status(StatusCodes.SERVER_ERROR).send(error);
  }
};

/**
 * IF Forgot Password this will help with generating New one
 * @param req
 * @param res
 * @returns
 */
const FogetPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  const OTP = generateOTP();
  const user = await User.findOne({ email });
  if(!user)
  {
    return res.status(StatusCodes.NOT_FOUND).json({ message: ResponseMessages.USER_NOT_FOUND });
  }
  try {
    user.otp = OTP;
    sendEmail(email, OTP);
    await user.save();
    res.status(StatusCodes.SUCCESS).json({
      error: ResponseMessages.SUCCESS
    });
  } catch (error) {
    res.status(StatusCodes.SERVER_ERROR).send(error);
  }

};

/**
 * Generates an OTP for Password reset
 * @param req
 * @param res
 */
const VerifyOTP = async (req: Request, res: Response) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ email });
  try {
    if(user?.otp == otp){
      res.status(StatusCodes.SUCCESS).json({
        error: ResponseMessages.SUCCESS
      });
    }else{
      res.status(StatusCodes.BAD_REQUEST).json({
        error: ResponseMessages.SUCCESS
      });
    }

  } catch (error) {
    res.status(StatusCodes.SERVER_ERROR).send(error);
  }
};

/**
 * Reset Passwords to a new One.
 * @param req
 * @param res
 */
const ResetPassword = async (req: Request, res: Response) => {
  const { email, NewPassword, ConfirmNewPassword } = req.body;
  const user = await User.findOne({ email });
  if(!user){
    res.status(StatusCodes.NOT_FOUND).json({
      error: ResponseMessages.USER_NOT_FOUND
    });
  }
  if(NewPassword === ConfirmNewPassword){
    const saltRounds = 10;
    const encryptedPassword = await bcrypt.hash(NewPassword, saltRounds);
    await User.updateOne({
      email:email
    }, {
      $set: { 'password': encryptedPassword }
    });
  }else{
    res.status(StatusCodes.UNAUTHORIZED).json({
      error: ResponseMessages.UNAUTHORIZED
    });
  }
  try {
    res.status(StatusCodes.SUCCESS).json({
      error: ResponseMessages.UNAUTHORIZED
    });
  } catch (error) {
    Logger.error(error);
  }

};

//Exporting Controllers
export {
  Signin,
  SignUp,
  FogetPassword,
  VerifyOTP,
  ResetPassword
};
