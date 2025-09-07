const Schema = require("validate");

const registerSchema = new Schema({
    name: {
        type: String,
        required: true,
        message: "Name is required!",
    },
});
