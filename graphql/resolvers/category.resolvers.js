// * ---- Models ----
const CategoryModel = require("../../models/Category");

// * ---- Utils ----
const { categoryValidator } = require("../../utils/validators/category.validate");
const { adminValidator } = require("../../utils/auth");

const categories = async () => {
    try {
        const categories = await CategoryModel.find({});
        return categories;
    } catch (error) {
        throw new Error(`Error fetching categories: ${error.message}`);
    }
}

const category = async ({ id: _id }) => {
    try {
        const category = await CategoryModel.findOne({ _id });
        if (!category)
            throw new Error("Category not found");

        return category;
    } catch (error) {
        throw new Error(`Error fetching category: ${error.message}`);
    }
}

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
