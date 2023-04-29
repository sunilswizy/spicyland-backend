import { Request, Response, NextFunction } from "express";
import Joi from 'joi';

const validate = (schema: Joi.ObjectSchema<any>) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if(error) {
        console.log(error)
        const errors = error.details.map((details: any) => details.message);
        return res.status(400).send({errors});
    }

    next();
};


export default validate;