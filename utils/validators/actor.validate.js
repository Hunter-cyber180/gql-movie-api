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
});
