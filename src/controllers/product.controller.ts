import { T } from "../libs/types/common";
import { Request, Response } from "express";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import Errors, { Message } from "../libs/errors";
import ProductService from "../models/Product.service";

const productController: T = {};
const productService = new ProductService();

productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllproducts");
    res.render("products");
  } catch (err) {
    console.log("Error:getAllProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.createNewProtuct = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("createNewProtuct");
    res.send("DONE");
  } catch (err) {
    console.log("Error:createNewProduct", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace('/admin/product/all');</script>`
    );
  }
};

productController.updateChosenProtuct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProtuct");
  } catch (err) {
    console.log("Error: updateChosenProduct:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default productController;
