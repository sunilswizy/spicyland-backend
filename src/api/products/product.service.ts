
import { Request, Response } from "express";

class ProductService {

    public addProducts = async (req: Request, res: Response) => {
       try {
            console.log("adding");
            res.status(200).send(true);
       }
       catch(e) {
            console.log("Error ", e);
            res.send(500);
       }
    }

}

export default ProductService;