const WatchList = require("../../models/WatchList");

const addWatchList = async (_, { input }) => {
    try {
        const watchList = new WatchList(input);
        return await watchList.save();
    } catch (error) {
        throw new Error(`Error creating watchlist: ${error.message}`);
    }
};

const getWatchListsByUser = async (_, { input }) => {
    try {
        const watchLists = await WatchList.find({ user: input.user })
            .populate("user", "name email")
            .populate("movies.movieID", "name director releaseYear");
        return watchLists;
    } catch (error) {
        throw new Error(`Error fetching watchlists: ${error.message}`);
    }
};

const getWatchListById = async ({ id: _id }) => {
    try {
        const watchList = await WatchList.findById(_id)
            .populate("user", "name email")
            .populate("movies.movieID", "name director releaseYear");
        if (!watchList) {
            throw new Error("Watchlist not found");
        }
        return watchList;
    } catch (error) {
        throw new Error(`Error fetching watchlist: ${error.message}`);
    }
};

const updateWatchList = async ({ id: _id }, { input }) => {
    try {
        const updatedWatchList = await WatchList.findByIdAndUpdate(
            _id,
            input,
            { new: true, runValidators: true }
        )
            .populate("user", "name email")
            .populate("movies.movieID", "name director releaseYear");

        if (!updatedWatchList) {
            throw new Error("Watchlist not found");
        }
        return updatedWatchList;
    } catch (error) {
        throw new Error(`Error updating watchlist: ${error.message}`);
    }
};

const deleteWatchList = async ({ id: _id }) => {
    try {
        const deletedWatchList = await WatchList.findByIdAndDelete(_id);
        if (!deletedWatchList)
            throw new Error("Watchlist not found");

        return { message: "Watchlist deleted successfully" };
    } catch (error) {
        throw new Error(`Error deleting watchlist: ${error.message}`);
    }
};

const addMovieToWatchList = async ({ id: _id }, args) => {
    try {
        const watchList = await WatchList.findById(_id);
        if (!watchList)
            throw new Error("Watchlist not found");

        const movieExists = watchList.movies.some(
            (movie) => movie.movieID.toString() === args.movieId
        );

        if (movieExists)
            throw new Error("Movie already exists in watchlist");

        watchList.movies.push({
            movieID: movieId,
            addedAt: new Date(),
            watched: false,
        });

        const updatedWatchList = await watchList.save();
        return await WatchList.populate(updatedWatchList, [
            { path: "user", select: "name email" },
            { path: "movies.movieID", select: "name director releaseYear" },
        ]);
    } catch (error) {
        throw new Error(`Error adding movie to watchlist: ${error.message}`);
    }
};

module.exports = {
    addWatchList,
    getWatchListsByUser,
    getWatchListById,
    updateWatchList,
    deleteWatchList,
    addMovieToWatchList,
};
