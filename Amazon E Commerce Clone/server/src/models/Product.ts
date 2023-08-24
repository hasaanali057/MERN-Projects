import mongoose from 'mongoose';

const PriceSchema = new mongoose.Schema({
  price: Number,
  currency: String,
  discountPercentage: Number,
  disountedPrice: Number,
});

// const ReviewSchema = new mongoose.Schema({
//   userId: String,
//   review: Number,
//   comment: String
// });

const VariantSchema = new mongoose.Schema({
  value: String,
  variantName: String,
});

const StockSChema = new mongoose.Schema({
  variantId: String,
  stock: String,
});

const ProductSchema = new mongoose.Schema({
  productName: String,
  productPrice: PriceSchema,
  productDescription: String,
  productImage: [String],
  productRating: Number,
  productCatagory: String,
  productReview: String,
  productVariants: VariantSchema,
  productTags: [String],
  productStock: StockSChema
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;