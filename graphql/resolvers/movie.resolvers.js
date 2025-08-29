// * ---- Models ----
const MovieModel = require("../../models/Movie");

const movies = async () => await MovieModel.find({});

const movie = async ({ id: _id }) => await MovieModel.findOne({ _id });

const addMovie = async (_, args) => {
    const {
        name,
        desc,
        src,
        releaseYear,
        duration,
        genres,
        director,
        trailerSrc,
        views,
        country,
        rating
    } = args;
    // TODO => check user role
    return await MovieModel.create({
        name,
        desc,
        src,
        releaseYear,
        duration,
        genres,
        director,
        trailerSrc,
        views,
        country,
        rating
    });
};

const editMovie = async ({ id: _id }, args, context) => {
    const {
        name,
        desc,
        src,
        releaseYear,
        duration,
        genres,
        director,
        trailerSrc,
        views,
        country,
        rating
    } = args;
    // TODO => check user role
    return await MovieModel.findOneAndUpdate(
        { _id }, {
        name,
        desc,
        src,
        releaseYear,
        duration,
        genres,
        director,
        trailerSrc,
        views,
        country,
        rating
    });
}

const deleteMovie = async ({ id: _id }) => {
    // TODO => check user role
    await MovieModel.findOneAndDelete({ _id });
}

module.exports = {
    movies,
    movie,
    addMovie,
    editMovie,
    deleteMovie,
};
