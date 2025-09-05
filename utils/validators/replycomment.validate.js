const Schema = require("validate");

const replyCommentSchema = new Schema({
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
    comment: {
        type: String,
        required: true,
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v),
            message: "commentID must be a valid MongoDB ObjectId!"
        }
    },
});
