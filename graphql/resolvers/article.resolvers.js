// * ---- Models ----
const ArticleModel = require("../../models/Article");

// * ---- Utils ----
const { articleValidator } = require("../../utils/validators/article.validate");

const articles = async () => {
    try {
        const articles = await ArticleModel.find({});
        return articles;
    } catch (error) {
        throw new Error(`Error fetching articles: ${error.message}`);
    }
};

const article = async ({ id: _id }) => {
    try {
        const article = await ArticleModel.findOne({ _id });
        return article;
    } catch (error) {
        throw new Error(`Error fetching article: ${error.message}`);
    }
}

const addArticle = async (_, { input }, context) => {
    const { author, imageSrc, title, body, likes, dislikes } = input;
    // TODO => check user role (the author of article)

    const validateError = articleValidator(input)[0]?.message;
    if (validateError) throw new Error(validateError);

    return await ArticleModel.create({
        author, imageSrc, title, body, likes, dislikes
    });
}

const editArticle = async ({ id: _id }, { input }, context) => {
    const { author, imageSrc, title, body, likes, dislikes } = input;
    // TODO => check user role (the author of article)

    const validateError = articleValidator(input)[0]?.message;
    if (validateError) throw new Error(validateError);

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
