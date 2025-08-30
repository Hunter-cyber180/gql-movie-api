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
