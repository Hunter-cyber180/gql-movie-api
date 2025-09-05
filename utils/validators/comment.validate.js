const Schema = require("validate");

const commentSchema = new Schema({
    user: {
        type: String,
        required: true,
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v),
            message: "userID must be a valid MongoDB ObjectId!"
        }
    },
    movie: {
        type: String,
        required: true,
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v),
            message: "movieID must be a valid MongoDB ObjectId!"
        }
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
