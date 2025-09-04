const Schema = require("validate");
const mongoose = require("mongoose");

const movieSchema = new Schema({
    name: {
        type: String,
        required: true,
        message: "Name is required!",
    },
    desc: {
        type: String,
        required: true,
        message: "Description is required!",
    },
    src: {
        type: String,
        required: true,
        message: "Src is required!",
    },
    releaseYear: {
        type: Number,
        required: true,
        message: "Release year is required!",
    },
    duration: {
        type: Number,
        required: true,
        message: "Duration is required!",
    },
    director: {
        type: String,
        required: true,
        message: "Director is required!",
    },
    trailerSrc: {
        type: String,
        required: true,
        message: "Trailer src is required!",
    },
});
