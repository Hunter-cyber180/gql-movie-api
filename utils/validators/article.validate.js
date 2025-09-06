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
});
