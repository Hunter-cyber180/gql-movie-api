exports.ReplyComment = `
  type ReplyComment {
    _id: ID,
    user: User,
    movie: Movie,
    comment: Comment,
    body: String,
    likes: Number,
    dislikes: Number
  }
`;

exports.ReplyCommentInput = `
  input ReplyCommentInput {
    user: ID,
    movie: ID,
    comment: ID,
    body: String,
    likes: Number,
    dislikes: Number
  }
`;
