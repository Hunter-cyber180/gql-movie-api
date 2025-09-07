const Schema = require("validate");

const articleSchema = new Schema({
    author: {
        type: String,
        required: true,
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v),
            message: "authorID must be a valid MongoDB ObjectId!"
        }
    },
    imageSrc: {
        type: String,
        required: false,
        message: "Image src must be a string!",
    },
    title: {
        type: String,
        required: true,
        message: "Title is required!",
    },
    body: {
        type: String,
        required: true,
        message: "Body is required!",
    },
    likes: {
        type: Number,
        required: false,
        message: "likes must be a number!",
    },
    dislikes: {
        type: Number,
        required: false,
        message: "Dislikes must be a number!",
    },
});

module.exports = {
    articleValidator: (object) => articleSchema.validate(object),
};
