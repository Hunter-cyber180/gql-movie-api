// * ---- Resolvers ----
const likeResolvers = require("./resolvers/like.resolvers");
const categoryResolvers = require("./resolvers/category.resolvers");

const RootResolvers = {
    Query: {
        categories: categoryResolvers.categories,
        category: categoryResolvers.category,
    },

    Mutation: {
    },
};

module.exports = RootResolvers;
