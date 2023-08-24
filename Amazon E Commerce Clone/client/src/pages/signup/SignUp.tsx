// Importing react modules
import React, { useState } from 'react'

// Importing Strings.Json file
import strings from '../../assets/Strings.json'

// MUI Imports
import { Box, TextField, Typography, Button } from '@mui/material'

// Styles Imports
import useStyles from '../../assets/styles'

// Importing react router Link, useNavigate Hook
import { Link, useNavigate } from 'react-router-dom'

// Importing Auth Services
import { signUpAPICall } from '../../services/authServices';

// Imorting Sign Up Css file
import Styles from './SignUp.module.css'

const SignUp: React.FC = () => {
  const style = useStyles()
  const navigate = useNavigate()
  const [username, SetUserName] = useState('')
  const [fullname, SetFullName] = useState('')
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  const [phonenumber, SetPhoneNumber] = useState('')

  // Error Messages States for all feilds
  const [usernameError, setusernameError] = useState('');
  const [fullnameError, setfullnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneNumberError, SetPhoneNumberError] = useState('')

  // Validating Full Name
  const validateFullname = (value: any) => {
    const fullNameRegex = /^(?:[a-zA-Z]{3,}\s){0,}[a-zA-Z]{3,}$/;
    if(!value){
      setfullnameError('First & last name required');
      return true;
    }
    else if (!fullNameRegex.test(value)) {
      setfullnameError('Invalid Name');
      return true;
    } else {
      setfullnameError('');
      return false;
    }
  };

  // Validate Email
  const validateEmail = (value: any) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!value){
        setEmailError('Email Required.')
        return true;
      }
      else if (!emailRegex.test(value)) {
          setEmailError('Invalid email format');
          return true;
      } else {
          setEmailError('');
          return false;
      }
  };

  // Validate Password
  const validatePassword = (value: any) => {
      if(!value){
        setPasswordError('Password Required');
        return true;
      }
      else if (value.length < 8) {
          setPasswordError('Password must be at least 8 characters long');
          return true;
      } else {
          setPasswordError('');
          return false;
      }
  };

  // Validate PhoneNumber 
  const validatePhoneNumber = (value: any) => {
    const PhoneNumberRegex = /^[0-9]+$/;
    if(!value){
      SetPhoneNumberError('Phone Number Required');
      return true;
    }
    else if (!PhoneNumberRegex.test(value)) {
      SetPhoneNumberError('Invalid Phone Number');
      return true;
    } else {
      SetPhoneNumberError('');
      return false;
    }
  };

  const singuphandlerfunction = async() => {

    const values = {
      username,
      fullname,
      email,
      password,
      phonenumber
    }
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)
    
    if(!validateEmail(email) && !validatePassword(password) && !validateFullname(fullname)){
      try {
        const response = await signUpAPICall(values)
        if (response?.status == 200) {
          navigate('/');
        }
      } catch (error) {
        
      } 
    }
  }
  return (
    <>
      <Box>
        <Link to='/'>
          <img src='amazon-new.png' alt= 'amazon logo' className='logoImage' ></img>
        </Link>
      </Box>
      <Box className={style.container}>
        <Box sx={{ textAlign: 'left'}}>
          <Typography variant="h5" gutterBottom>
            {strings.messages.createAccount}
          </Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels' sx={{ marginTop: '5px', fontWeight: '600' }}>
            Your name
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value = {fullname}
            onChange={(e) => SetFullName(e.target.value)}
            //onBlur={(e) => validateFullname(e.target.value)}
            error={Boolean(fullnameError)}
            //helperText={fullnameError}
            sx={{
              marginTop: '4px'
            }}
          />
          <p className={Styles.ErrorMessage}>{fullnameError}</p>
          <Typography variant="subtitle2" gutterBottom className='Labels' sx={{ marginTop: '5px', fontWeight: '600' }}>
            Email
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            type='email'
            fullWidth
            required
            value = {email}
            onChange={(e) => SetEmail(e.target.value.toLowerCase())}
            //onBlur={(e) => validateEmail(e.target.value.toLowerCase())}
            error={Boolean(emailError)}
            //helperText={emailError}
            sx={{
              marginTop: '4px'
            }}
          />
          <p className={Styles.ErrorMessage}>{emailError}</p>

          <Typography variant="subtitle2" gutterBottom className='Labels' sx={{ marginTop: '5px', fontWeight: '600' }}>
            Password
          </Typography>
          <TextField
            type='password'
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value = {password}
            onChange={(e) => SetPassword(e.target.value)}
            //onBlur={(e) => validatePassword(e.target.value)}
            error={Boolean(passwordError)}
            //helperText={passwordError}
            sx={{
              marginTop: '4px'
            }}
          />
          <p className={Styles.ErrorMessage}>{passwordError}</p>
          <Button onClick={ singuphandlerfunction } variant="contained" fullWidth sx = {{
            marginTop:1,
            color: 'black',
            backgroundColor: '#ffd814',
            ':hover': {
                backgroundColor: '#fcba03'
            },
            textTransform: 'none'
          }}
          >
            {strings.key.SignUp}
          </Button>
          <p className={ Styles.conitnueMessage}>By continuing, you agree to Amazon's <a href='#'>Conditions of Use</a> and <a href='#'>Privacy Notice</a>.</p>
          <Typography variant="subtitle1" gutterBottom sx = {{
            marginTop:2
          }}>
            {strings.messages.old_user } <Link to = "/">SignIn.</Link>
          </Typography>
          </Box>
      </Box>
    </>
  )
}

export default SignUp
