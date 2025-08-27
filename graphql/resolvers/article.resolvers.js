// * ---- Models ----
const ArticleModel = require("../../models/Article");

const articles = async () => await ArticleModel.find({});

module.exports = {
    articles,
};
