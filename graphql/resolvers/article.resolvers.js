// * ---- Models ----
const ArticleModel = require("../../models/Article");

const articles = async () => await ArticleModel.find({});

const article = async ({ id: _id }) => await ArticleModel.findOne({ _id });

module.exports = {
    articles,
    article,
};
