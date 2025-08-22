const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    movie: { type: mongoose.Types.ObjectId, ref: "Movie", required: true },
    body: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Comment", CommentSchema);
