exports.User = `
  type User {
    _id: ID
    name: String
    email: String
    phoneNumber: Int
    password: String
    role: String
  }
`;

exports.RoleEnum = `
  enum RoleEnum {
    ADMIN
    USER
  }
`;
