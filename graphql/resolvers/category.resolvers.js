// * ---- Models ----
const CategoryModel = require("../../models/Category");

const categories = async () => await CategoryModel.find({});

const category = async ({ id: _id }) => await CategoryModel.findOne({ _id });

const addCategory = async (_, args, context) => {
    const { title, icon } = args;
    // TODO => check user role
    return await CategoryModel.create({ title, icon });
}

const editCategory = async ({ id: _id }, args, context) => {
    const { title, icon } = args;
    // TODO => check user role
    return await CategoryModel.findOneAndUpdate({ _id }, { title, icon });
}

module.exports = {
    categories,
    category,
    addCategory,
    editCategory,
};
