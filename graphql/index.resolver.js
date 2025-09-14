// * ---- Models ----
const UserModel = require("../models/User");
const MovieModel = require("../models/Movie");
const CommentModel = require("../models/Comment");

// * ---- Resolvers ----
const likeResolvers = require("./resolvers/like.resolvers");
const categoryResolvers = require("./resolvers/category.resolvers");
const articleResolvers = require("./resolvers/article.resolvers");
const actorResolvers = require("./resolvers/actor.resolvers");
const commentResolvers = require("./resolvers/comment.resolvers");
const replyCommentResolvers = require("./resolvers/replycomment.resolvers");
const movieResolvers = require("./resolvers/movie.resolvers");
const userResolvers = require("./resolvers/user.resolvers");

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
        users: userResolvers.users,
        user: userResolvers.user,
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

        // * Users mutations
        registerUser: userResolvers.registerUser,
        loginUser: userResolvers.loginUser,
        deleteUser: userResolvers.deleteUser,
    },


    Like: {
        user: async (parent) => UserModel.find({ _id: parent.user }),
        movie: async (parent) => MovieModel.find({ _id: parent.movie }),
    },
    Article: {
        author: async (parent) => UserModel.find({ _id: parent.author })
    },
    Comment: {
        user: async (parent) => UserModel.find({ _id: parent.user }),
        movie: async (parent) => MovieModel.find({ _id: parent.movie }),
    },
    ReplyComment: {
        user: async (parent) => UserModel.find({ _id: parent.user }),
        movie: async (parent) => MovieModel.find({ _id: parent.movie }),
        comment: async (parent) => CommentModel.find({ _id: parent.comment }),
    },
};

module.exports = RootResolvers;
