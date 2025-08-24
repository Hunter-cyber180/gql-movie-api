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
