exports.WatchListType = `#graphql
  type WatchListType {
    _id: ID!
    name: String!
    user: User!
    movies: [WatchListMovie!]!
    createdAt: String!
    updatedAt: String!
  }
`;

exports.WatchListMovieType = `#graphql
  type WatchListMovieType {
    movieID: Movie!
    addedAt: String!
    watched: Boolean!
  }
`;

exports.WatchListMovieInput = `#graphql
  input WatchListMovieInput {
    movieID: ID!
    addedAt: String
    watched: Boolean
  }
`;
