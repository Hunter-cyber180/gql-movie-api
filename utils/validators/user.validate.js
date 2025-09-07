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
    password: {
        type: String,
        required: true,
        match: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        message: "Password is not strong!",
    },
    phoneNumber: {
        type: String,
        required: true,
        match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        message: "phoneNumber is not valid!",
    },
});

const loginSchema = new Schema({
    email: {
        type: String,
        required: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        message: "Email is not valid!",
    },
    password: {
        type: String,
        required: true,
        match: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        message: "Password is not strong!",
    },
});

module.exports = {
    registerValidator: (object) => registerSchema.validate(object),
};
