const articleTypes = require("./types/article.types");
const categoryTypes = require("./types/category.types");

module.exports = `#graphql
    ${articleTypes.Article}
    ${articleTypes.ArticleInput}
    ${categoryTypes.Category}
    ${categoryTypes.CategoryInput}

    type Query {

    }
   
    type Mutation {

    }
`;
