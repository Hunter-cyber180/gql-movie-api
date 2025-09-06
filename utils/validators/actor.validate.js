const Schema = require("validate");

const actorSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        message: "Fullname is required!",
    },
    bio: {
        type: String,
        required: false,
        message: "Bio must be a string!",
    },
    DateOfBirth: {
        type: Date,
        required: true,
        message: "Date of birth is required!",
    },
    PlaceOfBirth: {
        type: String,
        required: true,
        message: "Place of birth is required!",
    },
});
