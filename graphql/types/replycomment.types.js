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
