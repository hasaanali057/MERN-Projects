// module imports
import { NextFunction, Request, Response } from 'express';

// Importing User Model Class
import Product from '../../models/Product';

// Importing Status Codes
import { StatusCodes } from '../../config/common/statusCodes';

import jwt from 'jsonwebtoken';
import { ResponseMessages } from '../../config/common/errorMessages';

/**
 * Middleware for JWT products
 * @param req
 * @param res
 * @param next
 */
const AuthMiddleWare = async (req : any, res: Response, next: NextFunction) => {
  const token = req.header('authorization');
  if(!token){
    res.status(StatusCodes.UNAUTHORIZED).json({
      message: "Un Authorized Access."
    })
  }
  try{
    const decoded = jwt.verify(token, (String)(process.env.JWTKEY));
    req.user = decoded;
    next();
  }catch(error){
    res.status(StatusCodes.SERVER_ERROR).json({
      message: ResponseMessages.SERVER_ERROR
    })
  }
  

};

/**
 * Middleware for adding a new product
 * @param req
 * @param res
 * @param next
 */
const AddProductMiddleWare = async (req : Request, res: Response, next: NextFunction) => {

  next();

};

/**
 * Middleware to get all products
 * @param req
 * @param res
 * @param next
 */
const GetProductMiddleWare = async (req: Request, res: Response, next: NextFunction) => {

  next();

};

/**
 * Middleware to get product by id
 * @param req
 * @param res
 * @param next
 */
const GetProductbyIdMiddleWare = async (req: Request, res: Response, next: NextFunction) => {

  next();

};

/**
 * Middleware to update product
 * @param req
 * @param res
 * @param next
 */
const UpdateProductMiddleWare = async (req: Request, res: Response, next: NextFunction) => {

  next();

};

/**
 * Middleware to delete a product
 * @param req
 * @param res
 * @param next
 */
const DeleteProductMiddleWare = async (req: Request, res: Response, next: NextFunction) => {

  next();

};

/**
 * Middleware to get product by a catagory
 * @param req
 * @param res
 * @param next
 */
const SearchProductByCatagoryMiddleWare = async (req: Request, res: Response, next: NextFunction) => {

  next();

};

/**
 * Middleware to get all Product Catagories
 * @param req
 * @param res
 * @param next
 */
const GetAllCatagoriesMiddleWare = async (req: Request, res: Response, next: NextFunction) => {

  next();

};

/**
 * Middleware to get product by price range
 * @param req
 * @param res
 * @param next
 */
const SearchProductsByPriceRangeMiddleWare = async (req: Request, res: Response, next: NextFunction) => {

  next();

};

export {
  AddProductMiddleWare,
  GetProductMiddleWare,
  GetProductbyIdMiddleWare,
  UpdateProductMiddleWare,
  DeleteProductMiddleWare,
  SearchProductByCatagoryMiddleWare,
  GetAllCatagoriesMiddleWare,
  SearchProductsByPriceRangeMiddleWare,
  AuthMiddleWare
};