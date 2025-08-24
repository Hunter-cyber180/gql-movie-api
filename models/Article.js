const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    author: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    imageSrc: { type: String, default: null },
    title:  { type: String, required: true },
    body: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Article", ArticleSchema);
