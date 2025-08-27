// * ---- Models ----
const ArticleModel = require("../../models/Article");

const articles = async () => await ArticleModel.find({});

const article = async ({ id: _id }) => await ArticleModel.findOne({ _id });

const addArticle = async (_, args, context) => {
    const { author, imageSrc, title, body, likes, dislikes } = args;
    // TODO => check user role (the author of article)
    return await ArticleModel.create({
        author, imageSrc, title, body, likes, dislikes
    });
}

module.exports = {
    articles,
    article,
    addArticle,
};
