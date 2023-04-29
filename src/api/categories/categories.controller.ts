import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";

import CategoriesService from "./categories.service";



class CategoriesController {

    categoriesService = new CategoriesService()

    public addCategories = catchAsync(async (req: Request, res: Response) => {
        const response = await this.categoriesService.addCategories(req.body);
        return res.status(200).send(response);
    });

}

export default CategoriesController;