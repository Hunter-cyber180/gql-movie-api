const articleTypes = require("./types/article.types");
const categoryTypes = require("./types/category.types");
const likeTypes = require("./types/like.types");
const commentTypes = require("./types/comment.types");

module.exports = `#graphql
    ${articleTypes.Article}
    ${articleTypes.ArticleInput}
    ${categoryTypes.Category}
    ${categoryTypes.CategoryInput}
    ${likeTypes.Like}
    ${likeTypes.LikeInput}
    ${commentTypes.Comment}
    ${commentTypes.CommentInput}

    type Query {

    }
   
    type Mutation {

    }
`;
