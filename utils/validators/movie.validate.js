const Schema = require("validate");
const mongoose = require("mongoose");

const movieSchema = new Schema({
    name: {
        type: String,
        required: true,
        message: "Name is required!",
    },
});
