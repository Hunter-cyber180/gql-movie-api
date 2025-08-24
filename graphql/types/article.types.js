exports.Article = `
  type Article {
    _id: ID,
    author: User,
    imageSrc: String,
    title: String,
    body: String,
    likes: Number,
    dislikes: Number
  }
`;

exports.ArticleInput = `
  input ArticleInput {
    author: ID,
    imageSrc: String,
    title: String,
    body: String,
    likes: Number,
    dislikes: Number
  }
`;
