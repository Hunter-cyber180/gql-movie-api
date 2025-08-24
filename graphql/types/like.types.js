exports.Like = `
  type Like {
    _id: ID   
    user: User
    movie: Movie
  }
`;

exports.LikeInput = `
  input LikeInput {
    user: ID   
    movie: ID  
  }
`;
