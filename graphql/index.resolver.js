// * ---- Resolvers ----
const likeResolvers = require("./resolvers/like.resolvers");
const categoryResolvers = require("./resolvers/category.resolvers");

const RootResolvers = {
    Query: {
        categories: categoryResolvers.categories,
        category: categoryResolvers.category,
        likes: likeResolvers.likes,
        like: likeResolvers.like,
    },

    Mutation: {
        // * Category mutations
        addCategory: categoryResolvers.addCategory,
        editCategory: categoryResolvers.editCategory,
        deleteCategory: categoryResolvers.deleteCategory,
    },
};

module.exports = RootResolvers;
