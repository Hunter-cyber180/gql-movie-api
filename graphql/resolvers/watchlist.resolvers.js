const WatchList = require("../../models/WatchList");

const addWatchList = async (_, { input }) => {
    try {
        const watchList = new WatchList(input);
        return await watchList.save();
    } catch (error) {
        throw new Error(`Error creating watchlist: ${error.message}`);
    }
};

module.exports = {
    addWatchList,
};
