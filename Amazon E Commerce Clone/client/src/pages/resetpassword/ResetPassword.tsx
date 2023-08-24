import React, { useState } from 'react'

// MUI Imports
import { Box, TextField, Typography, Button } from '@mui/material'

// Styles Imports
import useStyles from '../../assets/styles'

// Importing react router useNavigate
import { Link, useLocation, useNavigate } from 'react-router-dom'

// Importing APi Call function
import { ResetPasswordAPICall } from '../../services/authServices'

//Importing Css file for this file
import './ResetPassword.css'

const ForgetPassword: React.FC = () => {

  const style = useStyles()
  const navigate = useNavigate()
  const [NewPassword, SetNewPassword] = useState('')
  const [ConfirmNewPassword, SetConfirmNewPassword] = useState('')
  const location = useLocation()
  const email = location.state?.email
  

  const resetPasswordHandlerFunction = async() => {
    try {
      const response = await ResetPasswordAPICall(email, NewPassword, ConfirmNewPassword)
      if(response.status === 200){
        navigate('/');
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
            Create new password
          </Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels' sx={{
            marginTop: '5px',
            fontFamily: 'Amazon Ember, Arial, sans-serif'
            }}>
            We'll ask for this password whenever you Sign-In.
          </Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels' sx={{
            marginTop: '5px',
            fontWeight: '600',
            fontFamily: 'Amazon Ember, Arial, sans-serif'
            }}>
            New password
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            onChange={(e) => { SetNewPassword(e.target.value) }}
            sx={{
              marginTop: '4px'
            }}
          />
          <Typography variant="subtitle2" gutterBottom className='Labels' sx={{
            marginTop: '5px',
            fontWeight: '600',
            fontFamily: 'Amazon Ember, Arial, sans-serif'
            }}>
            Re-enter password
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            onChange={(e) => { SetConfirmNewPassword(e.target.value) }}
            sx={{
              marginTop: '4px'
            }}
          />
          <Button variant="contained" color="primary" onClick={resetPasswordHandlerFunction} fullWidth sx = {{
            marginTop: '5px',
            color: 'black',
            backgroundColor: '#ffd814',
            ':hover': {
                backgroundColor: '#fcba03'
            },
            textTransform: 'none'
          }}>
            Save changes and Sign-In
          </Button>
        </Box>
      </Box>
      <Box sx={{
        maxWidth: 450,
        textAlign: 'left',
        margin: '1px auto',
        fontFamily: 'Amazon Ember, Arial, sans-serif'
        }}>
      <Typography variant="h4" gutterBottom className='Labels' sx={{
            marginTop: '20px',
            fontFamily: 'Amazon Ember, Arial, sans-serif'
            }}>
            Secure password tips:
          </Typography>
      </Box>
      <Box sx={{
        maxWidth: 450,
        textAlign: 'left',
        margin: '0px auto',
        padding: '20px',
        }}>
        <ul>
          <li>Use at least 8 characters, a combination of numbers and letters is best.</li>
          <li>Do not use the same password you have used with us previously.</li>
          <li>Do not use dictionary words, your name, e-mail address, mobile phone number or other personal information that can be easily obtained.</li>
          <li>Do not use the same password for multiple online accounts.</li>  
        </ul>
      </Box>
    </>
  )
}

export default ForgetPassword
