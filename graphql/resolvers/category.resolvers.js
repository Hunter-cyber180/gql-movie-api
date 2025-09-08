// * ---- Models ----
const CategoryModel = require("../../models/Category");

// * ---- Utils ----
const { categoryValidator } = require("../../utils/validators/category.validate");

const categories = async () => await CategoryModel.find({});

const category = async ({ id: _id }) => await CategoryModel.findOne({ _id });

const addCategory = async (_, args, context) => {
    const { title, icon } = args;
    // TODO => check user role
    await categoryValidator(context.req);
    return await CategoryModel.create({ title, icon });
}

const editCategory = async ({ id: _id }, args, context) => {
    const { title, icon } = args;
    // TODO => check user role
    return await CategoryModel.findOneAndUpdate({ _id }, { title, icon });
}

const deleteCategory = async ({ id: _id }) => await CategoryModel.findOneAndDelete({ _id });

module.exports = {
    categories,
    category,
    addCategory,
    editCategory,
    deleteCategory,
};
