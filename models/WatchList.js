const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WatchListMoviesSchema = new Schema({
    movieID: { type: mongoose.Types.ObjectId, ref: "Movie", required: true },
    addedAt: { type: Date, required: true },
    watched: { type: Boolean, default: false },
});

const WatchListSchema = new Schema({
    name: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    movies: [WatchListMoviesSchema],
}, { timestamps: true });

module.exports = mongoose.model("WatchList", WatchListSchema);
