const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WatchListSchema = new Schema({
    name: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });
