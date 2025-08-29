// * ---- Models ----
const MovieModel = require("../../models/Movie");

const movies = async () => await MovieModel.find({});

module.exports = {
    movies,
};
