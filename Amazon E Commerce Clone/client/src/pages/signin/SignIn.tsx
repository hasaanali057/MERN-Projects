// Importing react modules
import { useState } from 'react'

// Importing Strings.Json file
import strings from '../../assets/Strings.json'

// MUI Imports
import { Box, TextField, Typography, Button, Divider } from '@mui/material'

// Styles Imports
import useStyles from '../../assets/styles'

// Importing react router Link
import { Link } from 'react-router-dom'

// Importing UseNavigate
import { useNavigate } from 'react-router-dom'

// Importing Auth Services
import { signInAPICall } from '../../services/authServices'

import Styles from './SignIn.module.css'

const SignIn = () => {
    const style = useStyles()
    const navigate = useNavigate()
    const [email, Setemail] = useState('')
    const [password, SetPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [showAlert, setShowAlert] = useState(false);
    const [invalidUser , setInvalidUser] = useState("User does not exists")


    const validateEmail = (value: any) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!value){
            setEmailError('Enter Email Please')
            return true
        }
        else if (!emailRegex.test(value)) {
            setEmailError('Invalid email format')
            return true
        } else {
            setEmailError('')
            return false
        }
    }
    const validatePassword = (value: any) => {
        if(!value){
            setPasswordError('Enter Password Please')
            return true
        }
        else if (value.length < 8) {
            setPasswordError('Password must be at least 8 characters long')
            return true
        } else {
            setPasswordError('')
            return false
        }
    }

    const signInHandleFunction = async() => {
        validateEmail(email)
        validatePassword(password)
        if(!validateEmail(email) && !validatePassword(password)){
            try {
                const response = await signInAPICall(email, password)          
                if (response?.status == 200) {
                    navigate('/HomePage');
                }          
                else{
                    setShowAlert(true)
                }
            } catch (error) {
                setShowAlert(true)
                console.log(error)
            }
        }  
    }

    const goToSignUpPage = () => {
        navigate('/SignUp')
    }
  return (
    <>
      <Box>
        <Link to='/'>
          <img src='amazon-new.png' alt= 'amazon logo' className={Styles.logoImage} ></img>
        </Link>
      </Box>
        <Box className={style.container}>
            <Box sx={{ textAlign: 'left' }}>
                <label className={ Styles.TopLabel }>Sign in</label>
                <label className={ Styles.Labels }>Email</label>
                <TextField
                    variant="outlined"
                    margin="normal"
                    type='email'
                    //fullWidth
                    required
                    value = {email}
                    onChange={(e) => Setemail(e.target.value.toLowerCase())}
                    error={Boolean(emailError)}
                    sx={{
                        width: '100%',
                        marginTop: '4px',
                        fontSize: '12px!important'
                    }}
                    // className={Styles.inputField}
                />
                <p className={Styles.ErrorMessage}>{emailError}</p>
                <label className={Styles.Labels}>Password</label>

                <TextField
                    type='Password'
                    variant="outlined"
                    margin="normal"
                    //fullWidth
                    required
                    value = {password}
                    onChange={(e) => SetPassword(e.target.value)}
                    error={Boolean(passwordError)}
                    sx={{
                        width: '100%',
                        marginTop: '4px'
                    }}
                />
                <p className={Styles.ErrorMessage}>{passwordError}</p>
                {
                    showAlert==true?(
                        <p>{invalidUser}</p>
                    ):undefined

                }
                <Button variant="contained" color="primary" onClick={ signInHandleFunction } sx = {{
                    width: '100%',
                    marginTop: 2,
                    color: 'black',
                    backgroundColor: '#ffd814',
                    ':hover': {
                        backgroundColor: '#fcba03'
                    },
                    textTransform: 'none'
                }}>
                    {strings.key.SignIn}
                </Button>
                <p className={Styles.conitnueMessage}>By continuing, you agree to Amazon's <a href='#'>Conditions of Use</a> and <a href='#'>Privacy Notice</a>.</p>
                <Typography variant="body2" gutterBottom sx = {{
                    marginTop:2,
                    fontFamily: 'sans-serif'
                }}>
                    <Link to="/forgetPassword">{ strings.messages.forgotPassword }</Link>
                </Typography>
            </Box>
        </Box>
        <Box sx={{
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center', // This will center the components horizontally
           maxWidth: 318,
           margin: '20px auto'
        }}>
            <Divider style={{ width: '33%' }} />
            <Typography variant="body1" sx={{ margin: '0px!important', fontSize: '12px', color: '#767676', paddingLeft: '1px', paddingRight: '1px', width: '34%' }}>
                New to Amazon?
            </Typography>
            <Divider style={{ width: '33%' }} />
        </Box> 
        <Box sx={{
           display: 'flex',
           alignItems: 'center',
           maxWidth: 318,
           margin: '10px auto',
           
        }}>
            <Button onClick={goToSignUpPage}
                sx={{
                    borderRadius: '7px',
                    height: '29px',
                    border: '1px solid #adb1b8 ',
                    width: '100%',
                    color: '#111',
                    textTransform: 'none',
                    ':hover': {
                        backgroundColor: '#F7FAFA'
                    }}}>Create your Amazon account</Button>
        </Box>
    <Divider/>
    {/* <AuthFooter/> */}
    </>
  )
}

export default SignIn
