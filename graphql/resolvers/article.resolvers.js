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

const editArticle = async ({ id: _id }, args, context) => {
    const { author, imageSrc, title, body, likes, dislikes } = args;
    // TODO => check user role (the author of article)
    return await ArticleModel.findOneAndUpdate(
        { _id },
        { author, imageSrc, title, body, likes, dislikes }
    );
}

const deleteArticle = async ({ id: _id }) => await ArticleModel.findOneAndDelete({ _id });

module.exports = {
    articles,
    article,
    addArticle,
    editArticle,
    deleteArticle,
};
