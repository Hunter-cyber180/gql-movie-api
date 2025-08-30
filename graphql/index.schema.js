const articleTypes = require("./types/article.types");
const categoryTypes = require("./types/category.types");
const likeTypes = require("./types/like.types");

module.exports = `#graphql
    ${articleTypes.Article}
    ${articleTypes.ArticleInput}
    ${categoryTypes.Category}
    ${categoryTypes.CategoryInput}
    ${likeTypes.Like}
    ${likeTypes.LikeInput}

    type Query {

    }
   
    type Mutation {

    }
`;
