import express from "express";
import ProductService from "./product.service";

const Productrouter = express.Router();
const productService = new ProductService();

Productrouter
    .route('/products')
    .post(productService.addProducts)


export default Productrouter;
