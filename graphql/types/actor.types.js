exports.Actor = `
  type Category {
    _id: ID
    fullname: String,
    bio: String,
    DateOfBirth: Date,
    PlaceOfBirth: String,
    ProfileImageURL: String
  }
`;

exports.ActorInput = `
  input ActorInput {
    fullname: String,
    bio: String,
    DateOfBirth: Date,
    PlaceOfBirth: String,
    ProfileImageURL: String
  }
`;
