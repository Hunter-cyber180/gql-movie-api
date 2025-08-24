const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActorSchema = new Schema({
    fullname: { type: String, required: true },
    bio: { type: String, default: null },
    DateOfBirth: { type: Number, required: true },
    PlaceOfBirth: { type: String, required: true },
    ProfileImageURL: { type: String, default: null }
}, { timestamps: true });

module.exports = mongoose.model("Actor", ActorSchema);
