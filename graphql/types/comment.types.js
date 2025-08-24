exports.Comment = `
  type Category {
    _id: ID      
    user: User
    movie: Movie
    body: String,
    likes: Number,
    dislikes: Number
  }
`;

exports.CategoryInput = `
  input CommentInput {
    user: ID
    movie: ID 
    body: String,
    likes: Number,
    dislikes: Number
  }
`;
