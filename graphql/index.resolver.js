// * ---- Resolvers ----
const likeResolvers = require("./resolvers/like.resolvers");
const categoryResolvers = require("./resolvers/category.resolvers");
const articleResolvers = require("./resolvers/article.resolvers");

const RootResolvers = {
    Query: {
        categories: categoryResolvers.categories,
        category: categoryResolvers.category,
        likes: likeResolvers.likes,
        like: likeResolvers.like,
        articles: articleResolvers.articles,
        article: articleResolvers.article,
    },

    Mutation: {
        // * Category mutations
        addCategory: categoryResolvers.addCategory,
        editCategory: categoryResolvers.editCategory,
        deleteCategory: categoryResolvers.deleteCategory,

        // * Like mutations
        addLike: likeResolvers.addLike,
        deleteLike: likeResolvers.deleteLike,
    },
};

module.exports = RootResolvers;
