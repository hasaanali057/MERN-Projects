// IMporting AXIOS
import axios, { AxiosResponse } from "axios";

// Importing API URLS
import { ApiURLS } from "../assets/apiUrls";

const  signInAPICall = async(email: any , password: any) => {

  return await axios.post(ApiURLS.SignIn, {
    email,
    password,
  });
}

const  signUpAPICall = async(values: any) => {
 
  try {
    const response = await axios.post(ApiURLS.SignUp, {
      username: values.username,
      fullname: values.fullname,
      email: values.email,
      password: values.password,
      phonenumber: values.phonenumber
    });
    return response;
  } catch (error) {
    
  }
}

const  ForgotPasswordAPICall = async(email: any): Promise<AxiosResponse<any, any>> => {
 
  try {
    const response = await axios.post(ApiURLS.ForgetPassword, {
      email
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error to be caught at the calling location
  }
}

const  VerifyOTPAPICall = async(email: any, otp: any): Promise<AxiosResponse<any, any>> => {
 
  try {
    const response = await axios.post(ApiURLS.VerifyOTP, {
      email,
      otp
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error to be caught at the calling location
  }
}

const  ResetPasswordAPICall = async(email: any, NewPassword: any, ConfirmNewPassword: any): Promise<AxiosResponse<any, any>> => {
 
  try {
    const response = await axios.post(ApiURLS.ResetPassword, {
      email,
      NewPassword,
      ConfirmNewPassword
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error to be caught at the calling location
  }
}

export {
  signInAPICall,
  signUpAPICall,
  ForgotPasswordAPICall,
  VerifyOTPAPICall,
  ResetPasswordAPICall
};