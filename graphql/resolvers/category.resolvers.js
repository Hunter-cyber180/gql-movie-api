// * ---- Models ----
const CategoryModel = require("../../models/Category");

const categories = async () => await CategoryModel.find({});

const category = async ({ id: _id }) => await CategoryModel.findOne({ _id });

module.exports = {
    categories,
    category,
};
