// Importing react modules
import React from 'react'

// App.tsx 's CSS file import
import './App.css'

// Pages Imports
import SignUp from './pages/signup/SignUp'
import SignIn from './pages/signin/SignIn'
import HomePage from './pages/homepage/HomePage'
import ForgetPassword from './pages/forgetpassword/ForgetPassword'
import VerifyOTP from './pages/verifyotp/verifyOTP'
import ResetPassword from './pages/resetpassword/ResetPassword'

// Importing react-router-Dom modules
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/verifyotp" element={<VerifyOTP />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/homepage" element={<HomePage />} />
          {/* Add more routes here if needed */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
