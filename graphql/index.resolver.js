// * ---- Resolvers ----
const likeResolvers = require("./resolvers/like.resolvers");
const categoryResolvers = require("./resolvers/category.resolvers");
const articleResolvers = require("./resolvers/article.resolvers");
const actorResolvers = require("./resolvers/actor.resolvers");

const RootResolvers = {
    Query: {
        categories: categoryResolvers.categories,
        category: categoryResolvers.category,
        likes: likeResolvers.likes,
        like: likeResolvers.like,
        articles: articleResolvers.articles,
        article: articleResolvers.article,
        actors: actorResolvers.actors,
        actor: actorResolvers.actor,
    },

    Mutation: {
        // * Category mutations
        addCategory: categoryResolvers.addCategory,
        editCategory: categoryResolvers.editCategory,
        deleteCategory: categoryResolvers.deleteCategory,

        // * Like mutations
        addLike: likeResolvers.addLike,
        deleteLike: likeResolvers.deleteLike,

        // * Article mutations
        addArticle: articleResolvers.addArticle,
        editArticle: articleResolvers.editArticle,
        deleteArticle: articleResolvers.deleteArticle,

        // * Actors mutations
        addActor: actorResolvers.addActor,
        editActor: actorResolvers.editActor,
        deleteActor: actorResolvers.deleteActor,
    },
};

module.exports = RootResolvers;
