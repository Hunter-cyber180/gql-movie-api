const articleTypes = require("./types/article.types");
const categoryTypes = require("./types/category.types");
const likeTypes = require("./types/like.types");
const commentTypes = require("./types/comment.types");
const replyCommentTypes = require("./types/replycomment.types");
const movieTypes = require("./types/movie.types");
const actorTypes = require("./types/actor.types");
const userTypes = require("./types/user.types");

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

    type Query {

    }
   
    type Mutation {

    }
`;
