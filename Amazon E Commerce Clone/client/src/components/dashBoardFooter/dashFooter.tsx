import React from 'react'

// MUI Imports
import { Box, Typography, Link, Divider } from '@mui/material'

const DashFooter: React.FC = () => {
  const handleScrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Box sx= {{
        backgroundColor: '#37475A',
        color: 'white',
        textAlign: 'center',
        fontSize: '18px',
        padding: 2,
        ':hover': {
          backgroundColor: '#485769'
        },
        cursor: 'pointer'
      }}
        onClick={handleScrollToTop}
      >
        <Typography>Back To Top</Typography>
      </Box>
      <Box sx= {{
        height: '400px',
        backgroundColor: '#232F3E',
        color: 'white',
        display: 'grid',
        gridTemplateColumns: '3fr 3fr 3fr 3fr',
        padding: 7
      }}>
        <Box>
          <Typography variant='h6' gutterBottom>
            Get To Know Us
          </Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Careers</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Blog</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>About Amazon</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Investor Relations</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Amazon Devices</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Amazon Science</Typography>
        </Box>
        <Box>
          <Typography variant='h6' gutterBottom>Make Money with Us</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Sell products on Amazon</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Sell on Amazon Business</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Sell apps on Amazon</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Become an Affiliate</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Advertise Your Products</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Self-Publish with Us</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Host an Amazon Hub</Typography>
        </Box>
        <Box>
          <Typography variant='h6' gutterBottom>Amazon Payment Products</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Amazon Business Card</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Shop with Points</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Reload Your Balance</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Amazon Currency Converter</Typography>
        </Box>
        <Box>
          <Typography variant='h6' gutterBottom>Let Us Help You</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Amazon and COVID-19</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Your Account</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Your Orders</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Shipping Rates & Policies</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Returns & Replacements</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Manage Your Content and Devices</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Amazon Assistant</Typography>
          <Typography variant="subtitle2" gutterBottom className='Labels'>Help</Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{
        backgroundColor: '#232F3E',
        height: '100px',
        paddingTop: '20px'
      }}>
        <Link>
          <img src='amazon-new.png' alt= 'amazon logo' className='logoImage'></img>
        </Link>
      </Box>
    </>
  )
}

export default DashFooter
