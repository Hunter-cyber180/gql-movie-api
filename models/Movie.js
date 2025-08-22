const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    src: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    duration: { type: Number, required: true },
    genres: [{ type: String, required: true }],
    director: { type: String, required: true },
    trailerSrc: { type: String, required: true },
    views: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Movie", MovieSchema);
