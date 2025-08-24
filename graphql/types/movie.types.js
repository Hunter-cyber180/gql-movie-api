exports.Movie = `
  type Movie {
    name: String,
    desc: String,
    src: String,
    releaseYear: Number,
    duration: Number,
    genres: [String],
    director: String,
    trailerSrc: String,
    views: Number,
    country: String,
    rating: Number
  }
`;

exports.MovieInput = `
  input MovieInput {
    name: String,
    desc: String,
    src: String,
    releaseYear: Number,
    duration: Number,
    genres: [String],
    director: String,
    trailerSrc: String,
    views: Number,
    country: String,
    rating: Number
  }
`;
