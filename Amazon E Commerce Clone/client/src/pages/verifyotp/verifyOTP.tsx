// Importing react modules and useState Hook from react
import React, { useState } from 'react'

// MUI Imports
import { Box, TextField, Typography, Button, Link as Linker, Alert } from '@mui/material'

// Styles Imports
import useStyles from '../../assets/styles'

// Importing react router Link
import { Link, useLocation, useNavigate } from 'react-router-dom'

// Importing API Call function
import { ForgotPasswordAPICall, VerifyOTPAPICall } from '../../services/authServices'

//Importing Check Icon
import CheckIcon from '@mui/icons-material/Check';

const VerifyOTP: React.FC = () => {
  const style = useStyles()
  const navigate = useNavigate()
  const [otp, setotp] = useState('')
  const [showAlert, setShowAlert] = useState(false);
  const location = useLocation()
  const email = location.state?.email
  const verifyOTPHandlerFunction = async() => {
    const response = await VerifyOTPAPICall(email, otp)
    if (response.status === 200) {
      navigate('/resetPassword', { state: { email: email } })
    }
  }
  const resendOTPFunction = async() => {
    try {
      const response = await ForgotPasswordAPICall(email)
      if (response.status === 200) {
        setShowAlert(true)
      }
    } catch (error) {
      console.log(error)
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
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="h5" gutterBottom>
          Verification required
          </Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels' sx={{
            marginTop: '5px',
            fontFamily: 'Amazon Ember, Arial, sans-serif'
            }}>
            To continue, complete this verification step. We've sent a One Time Password (OTP) to your email. Please enter it below.
          </Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels' sx={{
            marginTop: '10px',
            fontWeight: '600',
            fontFamily: 'Amazon Ember, Arial, sans-serif'
            }}>
            Enter OTP
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            onChange={ (e) => { setotp(e.target.value) } }
            sx={{
              marginTop: '4px'
            }}/>
            {showAlert && (
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                A new code has been sent to your email.
              </Alert>
            )}
          <Button variant="contained" color="primary" onClick={ verifyOTPHandlerFunction } fullWidth sx = {{
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
        <Linker
            component="button"
            variant="body2"
            onClick={
              resendOTPFunction
            }
            sx = {{
              textAlign: 'centre',
              marginTop: 2,
              fontFamily: 'Amazon Ember, Arial, sans-serif',
              color: '#007185',
              ':hover': {
                color: '#5c1113'
            } }}
          >
            Resend OTP
          </Linker>
      </Box>
    </>
  )
}

export default VerifyOTP
