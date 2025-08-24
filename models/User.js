const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ["USER", "ADMIN", "AUTHOR"],
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);
