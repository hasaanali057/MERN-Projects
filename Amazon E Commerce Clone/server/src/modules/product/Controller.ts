// Importing Express Modules
import { Request, Response } from 'express';

// Importing User Schema file
import Product from '../../models/Product';

// Importing Status Codes
import { StatusCodes } from '../../config/common/statusCodes';

//IMporting Responce Messages
import { ResponseMessages } from '../../config/common/errorMessages';

//Importing Cloudinary
import cloudinary from '../../config/CloudinaryConfig';

//Importing
/**
 * Adding a new product to DataBase
 * @param req
 * @param res
 * @returns
 */
const AddProduct = async (req: any, res: Response) => {
  try {
    console.log(req.files);
    if(req.files == undefined){
      return res.status(StatusCodes.NOT_FOUND).json({
        message: ResponseMessages.NOT_FOUND
      })
    }
    // to store url from the object which is getting returned from cloudinary
    const uploadedImagesArray: any = [];
    // to store the cloudinary responce
    const uploadedImages: any[] = [];
    for (const file of req.files) {
      const base64Image = file.buffer.toString('base64'); // Convert Buffer to base64
      const result = await cloudinary.uploader.upload(`data:image/jpeg;base64,${base64Image}`, {
        folder: 'Assets'
      });
      uploadedImages.push(result);
    }
    uploadedImages.map((element) => {
      uploadedImagesArray.push(element.url);
    })
    
    const {
      productName,
      productPrice,
      productDescription,
      productCatagory
    } = req.body;

    const newProduct = new Product({
      productName: productName,
      productPrice: productPrice,
      productDescription: productDescription,
      productCatagory: productCatagory,
      productImage: uploadedImagesArray
    });

    await newProduct.save();
    return res.status(StatusCodes.SUCCESS).json({
      success:1,
      message: ResponseMessages.PRODUCTADDED,
      product: newProduct
    });
  } catch (error) {
    res.status(500).send({message: "Error Here."});
  }
};

/**
 * Fetching all products from DataBase
 * @param req
 * @param res
 * @returns
 */
const GetProduct = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = 10;
    const skip = (page-1)*limit;
    const products = await Product.find().skip(skip).limit(limit);
    res.json(products);
  } catch (error) {
    res.status(StatusCodes.SERVER_ERROR).json({ message: ResponseMessages.SERVER_ERROR });
  }
};

/**
 * Fetching product with specific Id
 * @param req
 * @param res
 * @returns
 */
const GetProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: ResponseMessages.NOT_FOUND });
    }
    res.json(product);
  } catch (error) {
    res.status(StatusCodes.SERVER_ERROR).json({ message: ResponseMessages.SERVER_ERROR });
  }
};

/**
 * Fetching product with specific Id
 * @param req
 * @param res
 * @returns
 */
const UpdateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const updateProduct = await Product.findByIdAndUpdate(
      productId,
      {
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productDescription: req.body.Description,
        productTags: req.body.productTags
      },
      { new: true }
    );
    if(!updateProduct){
      return res.status(StatusCodes.NOT_FOUND).json({ message: ResponseMessages.NOT_FOUND });
    }
    res.json(updateProduct);
  } catch (error) {
    res.status(StatusCodes.SERVER_ERROR).json({ message: ResponseMessages.SERVER_ERROR });
  }
};

/**
 * Fetching product with specific Id
 * @param req
 * @param res
 * @returns
 */
const DeleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(
      productId
    );
    if (!deletedProduct) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: ResponseMessages.NOT_FOUND });
    }
    return res.status(StatusCodes.SUCCESS).send();
  } catch (error) {
    res.status(StatusCodes.SERVER_ERROR).json({ message: ResponseMessages.SERVER_ERROR });
  }
};

/**
 * Fetching products pf specific catagory
 * @param req
 * @param res
 * @returns
 */
const GetProductsByCatagory = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = 10;
    const skip = (page-1)*limit;
    const catagory = req.params.catagory;
    console.log(catagory);
    const products = await Product.find({
      productCatagory: catagory
    }).skip(skip).limit(limit);
    console.log(products);
    if (products.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: ResponseMessages.NOT_FOUND });
    }
    return res.status(StatusCodes.SUCCESS).json(products);
  } catch (error) {
    res.status(StatusCodes.SERVER_ERROR).json({ message: ResponseMessages.SERVER_ERROR });
  }
};

/**
 * Fetching all Catagories
 * @param req
 * @param res
 * @returns
 */
const GetProductsCatagories = async (req: Request, res: Response) => {
  try {
    const categories = await Product.distinct('productCatagory'); // Retrieve all unique categories

    if (categories.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: ResponseMessages.NOT_FOUND });
    }

    return res.status(StatusCodes.SUCCESS).json(categories);
  } catch (error) {
    res.status(StatusCodes.SERVER_ERROR).json({ message: ResponseMessages.SERVER_ERROR });
  }
};

/**
 * Fetching products by price range
 * @param req
 * @param res
 * @returns
 */
const GetProductsByPriceRange = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = 10;
    const skip = (page-1)*limit;
    const minPrice = parseFloat(req.query.minPrice as string);
    const maxPrice = parseFloat(req.query.maxPrice as string);
    console.log(minPrice + ' ' + maxPrice);

    if (isNaN(minPrice) || isNaN(maxPrice)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: ResponseMessages.INVALID_CREDENTIALS });
    }

    const products = await Product.find({
      'productPrice.price': { $gte: minPrice, $lte: maxPrice },
    }).skip(skip).limit(limit);

    if (products.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: ResponseMessages.NOT_FOUND });
    }

    return res.status(StatusCodes.SUCCESS).json(products);
  } catch (error) {
    res.status(StatusCodes.SERVER_ERROR).json({ message: ResponseMessages.SERVER_ERROR });
  }
};

export{
  AddProduct,
  GetProduct,
  GetProductById,
  UpdateProduct,
  DeleteProduct,
  GetProductsByCatagory,
  GetProductsCatagories,
  GetProductsByPriceRange
};