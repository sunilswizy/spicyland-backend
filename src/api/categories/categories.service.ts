import { Request, Response } from "express";
import Category from "../../../models/Category";
import { ICategories } from "../../interfaces/categories";

class CategoriesService {

    public addCategories = (payload: ICategories) => {
      return new Promise(async (resolve, reject) => {
         try {
            let res = await Category.create(payload);
   
            resolve({
               success: true,
               id: res.get('id')
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

    public getCategories = () => {
      return new Promise(async (resolve, reject) => {
         try {
            let res = await Category.findAll({
               attributes: ['id', 'title', 'imgUrl'],
               order: ['createdAt']
            });

            resolve({
               success: true,
               data: res
            });
         }
         catch(err) {
            console.error("Error ", err);
            reject({
               success: false
            })
         }
      })
    }

    public updateCategories = (categories_id: string, payload: ICategories) => {
      return new Promise(async (resolve, reject) => {
         try {
            await Category.update(payload, {
               where: {
                  id: categories_id
               }
            });

            resolve({
               success: true,
               id: categories_id
            })
         }
         catch(err) {
            console.error("Error ", err);
            reject({
               success: false
            })
         }
      })
    }

    public deleteCategories = (categories_id: string) => {
      return new Promise(async (resolve, reject) => {
         try {
            await Category.destroy({
               where: {
                  id: categories_id
               }
            });

            resolve({
               success: true,
               id: categories_id
            })
         }
         catch(err) {
            console.error("Error ", err);
            reject({
               success: false
            })
         }
      })
    }

}

export default CategoriesService;