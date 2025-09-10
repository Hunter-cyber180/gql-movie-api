// * ---- Models ----
const CategoryModel = require("../../models/Category");

// * ---- Utils ----
const { categoryValidator } = require("../../utils/validators/category.validate");
const { adminValidator } = require("../../utils/auth");

const categories = async () => await CategoryModel.find({});

const category = async ({ id: _id }) => await CategoryModel.findOne({ _id });

const addCategory = async (_, { input }, context) => {
    const { title, icon } = input;
    await adminValidator(context.req);

    const validateError = categoryValidator(input)[0]?.message;
    if (validateError) throw new Error(validateError);

    return await CategoryModel.create({ title, icon });
}

const editCategory = async ({ id: _id }, { input }, context) => {
    const { title, icon } = input;
    await adminValidator(context.req);

    const validateError = categoryValidator(input)[0]?.message;
    if (validateError) throw new Error(validateError);

    return await CategoryModel.findOneAndUpdate({ _id }, { title, icon });
}

const deleteCategory = async ({ id: _id }, args, context) => {
    await adminValidator(context.req);
    return await CategoryModel.findOneAndDelete({ _id });
}

module.exports = {
    categories,
    category,
    addCategory,
    editCategory,
    deleteCategory,
};
