const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    movie: { type: mongoose.Types.ObjectId, ref: "Movie" },
    user: { type: mongoose.Types.ObjectId, ref: "User" },
}, {
    timestamps: true
});

module.exports = mongoose.model("Like", LikeSchema);
