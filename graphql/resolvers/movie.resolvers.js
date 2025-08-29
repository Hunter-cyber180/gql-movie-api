// * ---- Models ----
const MovieModel = require("../../models/Movie");

const movies = async () => await MovieModel.find({});

const movie = async ({ id: _id }) => await  MovieModel.findOne({ _id });

module.exports = {
    movies,
    movie,
};
