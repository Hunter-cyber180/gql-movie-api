exports.Category = `
  type Category {
    _id: ID      
    title: String
    icon: String 
    movies: [Movie]
  }
`;

exports.CategoryInput = `
  input CategoryInput {
    title: String
    icon: String 
  }
`;
