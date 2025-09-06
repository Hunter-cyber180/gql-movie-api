const Schema = require("validate");

const actorSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        message: "Fullname is required!",
    },
});
