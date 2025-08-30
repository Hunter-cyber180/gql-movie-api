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

exports.WatchListInput = `#graphql
  input WatchListInput {
    name: String!
    user: ID!
    movies: [WatchListMovieInput]
  }
`;

exports.UpdateWatchListInput = `#graphql
  input UpdateWatchListInput {
    name: String
    movies: [WatchListMovieInput]
  }
`;
