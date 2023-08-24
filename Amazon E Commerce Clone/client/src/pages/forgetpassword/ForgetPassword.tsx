// Import react modules and seState Hook
import React, { useState } from 'react'

// MUI Imports
import { Box, TextField, Typography, Button } from '@mui/material'

// Styles Imports
import useStyles from '../../assets/styles'
import './ForgetPassword.css'

// Importing react router useNavigate
import { Link, useNavigate } from 'react-router-dom'

import { ForgotPasswordAPICall } from '../../services/authServices'

const ForgetPassword: React.FC = () => {
  const style = useStyles()
  const navigate = useNavigate()
  const [email, Setemail] = useState('')

  const [emailError, setEmailError] = useState('')
  
  const validateEmail = (value: any) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!email){
          setEmailError('Enter Email Please');
      }
      else if (!emailRegex.test(value)) {
          setEmailError('Invalid email format');
      } else {
          setEmailError('');
      }
  };

  const passwordChangeHandlerFunction = async() => {

    validateEmail(email);

    try {
      const response = await ForgotPasswordAPICall(email)
      if (response.status === 200){
        navigate('/verifyotp', { state: { email: email } })
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Box>
        <Link to='/'>
          <img src='amazon-new.png' alt= 'amazon logo' className='logoImage'></img>
        </Link>
      </Box>
      <Box className={style.container}>
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="h5" gutterBottom>
            Password assistance
          </Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels' sx={{
            marginTop: '5px',
            fontFamily: 'Amazon Ember, Arial, sans-serif'
            }}>
            Enter the email address or mobile phone number associated with your Amazon account.
          </Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels' sx={{
            marginTop: '10px',
            fontWeight: '600',
            fontFamily: 'Amazon Ember, Arial, sans-serif'
            }}>
            Email
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            onChange={(e) => { Setemail(e.target.value) }}
            onBlur={(e) => validateEmail(e.target.value)}
            error={Boolean(emailError)}
            helperText={emailError}
            sx={{
              marginTop: '4px'
            }}
          />
          <Button variant="contained" color="primary" onClick={passwordChangeHandlerFunction} fullWidth sx = {{
            marginTop: '5px',
            color: 'black',
            backgroundColor: '#ffd814',
            ':hover': {
                backgroundColor: '#fcba03'
            },
            textTransform: 'none'
          }}>
            Continue
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default ForgetPassword
