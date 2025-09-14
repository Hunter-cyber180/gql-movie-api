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
            .populate("user", "username email")
            .populate("movies.movieID", "name director releaseYear");
        return watchLists;
    } catch (error) {
        throw new Error(`Error fetching watchlists: ${error.message}`);
    }
};

module.exports = {
    addWatchList,
    getWatchListsByUser
};
