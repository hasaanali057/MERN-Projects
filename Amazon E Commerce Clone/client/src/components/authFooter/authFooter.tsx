import React from 'react'

// Style Imports
import './authFooter.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const AuthFooter: React.FC = () => {
  return (
    <div>
      <div className='col-3' >
          <div className='row'>
            <div className='col-4'>
              <span className="footer-span-tag">Conditions of use</span>
            </div>
            <div className='col-4'>
              <span className="footer-span-tag">Privacy notice</span>
            </div>
            <div className='col-4'>
              <span className="footer-span-tag">Help</span>
            </div>
            <div className='col-12'>
              <p id='sign-up-copyright-footer'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AuthFooter
