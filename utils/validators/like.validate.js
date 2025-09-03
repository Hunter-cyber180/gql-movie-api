const Schema = require("validate");
const mongoose = require("mongoose");

const likeSchema = new Schema({
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
});
