const articleTypes = require("./types/article.types");

module.exports = `#graphql
    ${articleTypes.Article}
    ${articleTypes.ArticleInput}

    type Query {

    }
   
    type Mutation {

    }
`;
