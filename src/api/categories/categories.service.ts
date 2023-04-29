import { Request, Response } from "express";
import Category from "../../../models/Category";
import { ICategories } from "../../interfaces/categories";

class CategoriesService {

    public addCategories = (payload: ICategories) => {
      return new Promise(async (resolve, reject) => {
         try {
            let res = await Category.create(payload);
            console.log("res", res)
            resolve({
               success: true,
               data: payload
            });
         }
         catch(err: any) {
            if(err.name === 'SequelizeUniqueConstraintError') {
               return resolve({
                  message: 'Categories with the name already found'
               });  
            }
            
            console.error("Error ", err);
            reject({
               success: false
            })
         }
      })
    }

   //  public updateProducts = (product_id)

}

export default CategoriesService;