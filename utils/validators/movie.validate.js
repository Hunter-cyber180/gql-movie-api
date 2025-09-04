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
    country: {
        type: String,
        required: false,
        message: "Country must be a string!",
    },
    rating: {
        type: Number,
        required: false,
        message: "Rating must be a number!",
    },
    genres: {
        type: Array,
        required: true,
        message: "Genres are required!",
        each: {
            type: String,
            required: true,
            message: "Each genre must be a non-empty string!"
        }
    }
});
