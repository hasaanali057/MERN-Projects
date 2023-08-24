import * as React from 'react';

// MUI Imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Product {
  title: string;
  image: string;
  price: number;
  rating: number;
}

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <>
      {products.map((product, index) => (
        <Card key={index} sx={{ maxWidth: 500, paddingTop: '40px', paddingLeft: '15px', paddingRight: '15px' }}>
          <CardMedia
            sx={{
              height: 300,
              width: '100%'
            }}
            image={product.image}
            title={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${product.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export default Products