// * ---- Resolvers ----
const likeResolvers = require("./resolvers/like.resolvers");
const categoryResolvers = require("./resolvers/category.resolvers");
const articleResolvers = require("./resolvers/article.resolvers");
const actorResolvers = require("./resolvers/actor.resolvers");
const commentResolvers = require("./resolvers/comment.resolvers");
const replyCommentResolvers = require("./resolvers/replycomment.resolvers");
const movieResolvers = require("./resolvers/movie.resolvers");

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
        comments: commentResolvers.comments,
        comment: commentResolvers.comment,
        replyComments: replyCommentResolvers.replyComments,
        replyComment: replyCommentResolvers.replyComment,
        movies: movieResolvers.movies,
        movie: movieResolvers.movie,
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

        // * Comment mutations
        addComment: commentResolvers.addComment,
        deleteComment: commentResolvers.deleteComment,

        // * ReplyComment mutations
        addReplyComment: replyCommentResolvers.addReplyComment,
        deleteReplyComment: replyCommentResolvers.deleteReplyComment,

        // * Movie mutations
        addMovie: movieResolvers.addMovie,
        editMovie: movieResolvers.editMovie,
        deleteMovie: movieResolvers.deleteMovie,
    },
};

module.exports = RootResolvers;
