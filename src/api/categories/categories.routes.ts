import express from "express";
import validate from "../../middlewares/validate";
import CategoriesController from "./categories.controller";
import CategoriesValidation from "./categories.validate";

const Categoriesrouter = express.Router();
const categoriesController = new CategoriesController();
const categoriesValidate = new CategoriesValidation();

Categoriesrouter
    .route('/categories')
    .post(validate(categoriesValidate.addCategories), categoriesController.addCategories)
    .get(categoriesController.getCategories);

Categoriesrouter    
    .route('/categories/:categories_id')
    .put(validate(categoriesValidate.addCategories), categoriesController.updateCategories)
    .delete(categoriesController.deleteCategories)


export default Categoriesrouter;
