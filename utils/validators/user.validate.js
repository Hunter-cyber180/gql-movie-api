const Schema = require("validate");

const registerSchema = new Schema({
    name: {
        type: String,
        required: true,
        message: "Name is required!",
    },
    email: {
        type: String,
        required: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        message: "Email is not valid!",
    },
});
