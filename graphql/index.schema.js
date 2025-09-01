const articleTypes = require("./types/article.types");
const categoryTypes = require("./types/category.types");
const likeTypes = require("./types/like.types");
const commentTypes = require("./types/comment.types");
const replyCommentTypes = require("./types/replycomment.types");
const movieTypes = require("./types/movie.types");
const actorTypes = require("./types/actor.types");
const userTypes = require("./types/user.types");
const watchListTypes = require("./types/watchlist.types");

module.exports = `#graphql
    ${articleTypes.Article}
    ${articleTypes.ArticleInput}
    ${categoryTypes.Category}
    ${categoryTypes.CategoryInput}
    ${likeTypes.Like}
    ${likeTypes.LikeInput}
    ${commentTypes.Comment}
    ${commentTypes.CommentInput}
    ${replyCommentTypes.ReplyComment}
    ${replyCommentTypes.ReplyCommentInput}
    ${movieTypes.Movie}
    ${movieTypes.MovieInput}
    ${actorTypes.Actor}
    ${actorTypes.ActorInput}
    ${userTypes.AuthResult}
    ${userTypes.LoginInput}
    ${userTypes.RegisterInput}
    ${userTypes.User}
    ${userTypes.RoleEnum}
    ${watchListTypes.WatchListInput}
    ${watchListTypes.WatchListType}
    ${watchListTypes.WatchListMovieInput}
    ${watchListTypes.WatchListMovieType}
    ${watchListTypes.UpdateWatchListInput}

    type Query {
        categories: [Category!]!
        category(id: ID!): Category
        users: [User]
        user(id: ID!): User
        likes: [Like!]!
        like(id: ID!): Like
        comments: [Comment!]!
        comment(id: ID!): Comment
        replyComments: [ReplyComment!]!
        replyComment(id: ID!): ReplyComment
        actors: [Actor!]!
        actor(id: ID!): Actor
    }

    type Mutation {
        addCategory(input: CategoryInput!): Category
        editCategory(input: CategoryInput!): Category
        deleteCategory(id: ID!): Category
        register(input: RegisterInput!): AuthResult
        login(input: LoginInput!): AuthResult
        addLike(input: LikeInput!): Like
        deleteLike(id: ID!): Like
        addComment(input: CommentInput!): Comment
        deleteComment(id: ID!): Comment
        addReplyComment(input: ReplyCommentInput): ReplyComment
        deleteReplyComment(id: ID!): ReplyComment
        addActor(input: ActorInput!): Actor
        editActor(input: ActorInput!): Actor
        deleteActor(id: ID!): Actor
    }
`;
