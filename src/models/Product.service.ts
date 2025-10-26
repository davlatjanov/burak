import Errors from "../libs/errors";
import {
  Product,
  ProductInput,
  ProductUpdateInput,
} from "../libs/types/product";
import ProductModel from "../schemas/Product.model";
import { HttpCode } from "../libs/errors";
import { Message } from "../libs/errors";
import { shapeIntoMongooseObjectId } from "../libs/config";

class ProductService {
  private readonly productModel;
  constructor() {
    this.productModel = ProductModel;
  }
}

export default ProductService;
