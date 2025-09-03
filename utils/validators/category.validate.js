const Schema = require("validate");

const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
        message: "Title is required!",
    },
    icon: {
        type: String,
        required: true,
        message: "Icon is required!",
    },
});

module.exports = {
    categoryValidator: (object) => categorySchema.validate(object),
};
