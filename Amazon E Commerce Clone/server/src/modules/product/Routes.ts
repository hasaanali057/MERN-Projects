// Importing Express Modules
import express from 'express';

// Importing Router
const ProductRouter = express.Router();

// Importing Middleware Functions
import {
  AddProductMiddleWare,
  GetProductMiddleWare,
  GetProductbyIdMiddleWare,
  UpdateProductMiddleWare,
  DeleteProductMiddleWare,
  SearchProductByCatagoryMiddleWare,
  GetAllCatagoriesMiddleWare,
  SearchProductsByPriceRangeMiddleWare,
  AuthMiddleWare
} from './MiddleWare';

//Imprting Controllers for Products
import {
  AddProduct,
  GetProduct,
  GetProductById,
  UpdateProduct,
  DeleteProduct,
  GetProductsByCatagory,
  GetProductsCatagories,
  GetProductsByPriceRange
}from '../product/Controller';

// Importing Multer
import upload from '../../config/MulterConfig';

//Add Product Route
ProductRouter.post('/addNewProduct',upload.array('image'), AuthMiddleWare, AddProduct);
ProductRouter.get('/getProduct', GetProductMiddleWare, GetProduct);
ProductRouter.get('/getProductbyId/:id', GetProductbyIdMiddleWare, GetProductById);
ProductRouter.put('/updateProduct/:id', AuthMiddleWare, UpdateProduct);
ProductRouter.delete('/deleteProduct/:id', AuthMiddleWare, DeleteProduct);
ProductRouter.get('/searchProductbyCatagory/:catagory', SearchProductByCatagoryMiddleWare, GetProductsByCatagory);
ProductRouter.get('/getAllCatagories', GetAllCatagoriesMiddleWare, GetProductsCatagories);
ProductRouter.get('/searchProductByPriceRange', SearchProductsByPriceRangeMiddleWare, GetProductsByPriceRange);

export { ProductRouter };