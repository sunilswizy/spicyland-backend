import Joi from "joi";


class CategoriesValidation {
    addCategories = Joi.object({
        title: Joi.string().required(),
        imgUrl: Joi.string().required()
    });
};

export default CategoriesValidation;