// * ----- Models -----
const WatchList = require("../../models/WatchList");

// Create a new watchlist with the provided input data
const addWatchList = async (_, { input }) => {
    try {
        // create new watchlist
        const watchList = new WatchList(input);
        return await watchList.save();
    } catch (error) {
        // throw error if an error occurs when creating a new object
        throw new Error(`Error creating watchlist: ${error.message}`);
    }
};

// Fetch all watchlists for a specific user with populated user and movie data
const getWatchListsByUser = async (_, args) => {
    try {
        // get the watchlists and return the data
        const watchLists = await WatchList.find({ user: args.user })
            .populate("user", "name email")
            .populate("movies.movieID", "name director releaseYear");
        return watchLists;
    } catch (error) {
        // throw error if an error occurs when fetching the watchlists
        throw new Error(`Error fetching watchlists: ${error.message}`);
    }
};

// Get a specific watchlist by ID with populated user and movie details
const getWatchListById = async ({ id: _id }) => {
    try {
        // Find watchlist and populate related data
        const watchList = await WatchList.findById(_id)
            .populate("user", "name email") // Basic user info
            .populate("movies.movieID", "name director releaseYear"); // Movie details
        
        // Handle case where watchlist doesn't exist
        if (!watchList)
            throw new Error("Watchlist not found");

        return watchList;
    } catch (error) {
        // throw error if an error occurs when fetching the watchlist
        throw new Error(`Error fetching watchlist: ${error.message}`);
    }
};

// Update a watchlist by ID with provided data and return the updated document
const updateWatchList = async ({ id: _id }, { input }) => {
    try {
        // Find and update watchlist, return the modified document
        const updatedWatchList = await WatchList.findByIdAndUpdate(
            _id,
            input,
            { new: true, runValidators: true } // Return updated doc and validate data
        )
            .populate("user", "name email") // Include user details
            .populate("movies.movieID", "name director releaseYear"); // Include movie info

        // Handle case where watchlist doesn't exist
        if (!updatedWatchList)
            throw new Error("Watchlist not found");

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

const removeMovieFromWatchList = async ({ id: _id }, args) => {
    try {
        const watchList = await WatchList.findById(_id);
        if (!watchList)
            throw new Error("Watchlist not found");

        watchList.movies = watchList.movies.filter(
            (movie) => movie.movieID.toString() !== args.movieId
        );

        const updatedWatchList = await watchList.save();
        return await WatchList.populate(updatedWatchList, [
            { path: "user", select: "name email" },
            { path: "movies.movieID", select: "name director releaseYear" },
        ]);
    } catch (error) {
        throw new Error(`Error removing movie from watchlist: ${error.message}`);
    }
};

const updateMovieWatchedStatus = async ({ id: _id }, args) => {
    try {
        const watchList = await WatchList.findById(_id);
        if (!watchList)
            throw new Error("Watchlist not found");

        const movie = watchList.movies.find(
            (item) => item.movieID.toString() === args.movieId
        );

        if (!movie)
            throw new Error("Movie not found in watchlist");

        movie.watched = args.watched;
        const updatedWatchList = await watchList.save();
        return await WatchList.populate(updatedWatchList, [
            { path: "user", select: "name email" },
            { path: "movies.movieID", select: "name director releaseYear" },
        ]);
    } catch (error) {
        throw new Error(`Error updating movie status: ${error.message}`);
    }
};

module.exports = {
    addWatchList,
    getWatchListsByUser,
    getWatchListById,
    updateWatchList,
    deleteWatchList,
    addMovieToWatchList,
    removeMovieFromWatchList,
    updateMovieWatchedStatus,
};
