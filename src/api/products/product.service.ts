import { Request, Response } from "express";
import Category from "../../../models/Category";
class ProductService {

    public addProducts = async (req: Request, res: Response) => {
       try {
            console.log("adding");

            Category.create({
               title: 'ice cream',
               imgUrl: 'https://media.istockphoto.com/id/1148364081/photo/front-view-of-real-edible-ice-cream-cone-with-3-different-scoops-of-ice-cream-isolated-on.jpg?s=612x612&w=0&k=20&c=m51YpJ0bZ0aBecUrB413RWMDqEC1mjxnXPO7K6t4CfE='
            })

            res.status(200).send([]);
       }
       catch(e) {
            console.log("Error ", e);
            res.send(500);
       }
    }

}

export default ProductService;