// Importing React Modules
import React from 'react';

// Importing Components
import Header from '../../components/navbar/navBar';
import Products from '../../components/productCard/productCard';
import DashFooter from '../../components/dashBoardFooter/dashFooter';

//Importing MUI Components
import { Box } from '@mui/material';

import './HomePage.css';
import Slider from '../../components/slider/slider';



const HomePage: React.FC = () => {

  const products = [
    { title: "Product 1", image: 'product1.jpg', price: 10.99, rating: 5 },
    { title: "Product 2", image: 'product2.jpg', price: 10.99, rating: 5 },
    { title: "Product 3", image: 'product3.jpg', price: 10.99, rating: 5 },
    { title: "Product 4", image: 'product4.jpg', price: 10.99, rating: 5 },
    { title: "Product 5", image: 'product3.jpg', price: 10.99, rating: 5 },
    { title: "Product 6", image: 'product2.jpg', price: 10.99, rating: 5 },
    { title: "Product 7", image: 'product1.jpg', price: 10.99, rating: 5 }
  ];

  return (
    <div className='homeBody'>
      <Header />
      <Slider/>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        padding: '60px',
        minHeight: 350,
        height: 'auto',
        gap: '20px'
      }}>
        <Products products = {products}/>
      </Box>
      <DashFooter/>
      
    </div>
  )
}

export default HomePage;