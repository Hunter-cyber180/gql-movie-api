// * ---- Models ----
const CategoryModel = require("../../models/Category");

const categories = async () => await CategoryModel.find({});

module.exports = {
    categories,
};
