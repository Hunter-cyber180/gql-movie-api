// * ---- Models ----
const UserModel = require("../../models/User");

// ** ---- Packages ----
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (_, { input }) => {
    // TODO => validate user data

    const existingUser = await UserModel.findOne({
        $or: [{ email: input.email }, { phoneNumber: input.phoneNumber }]
    });
    if (existingUser) throw new Error("User already exists!");

    const hashedPassword = await bcrypt.hash(input.password, 10);
    const isFirstUser = (await UserModel.countDocuments()) === 0;

    const user = await UserModel.create({
        ...input,
        password: hashedPassword,
        role: isFirstUser ? "ADMIN" : input.role
    });

    const token = jwt.sign(
        { id: user._id },
        process.env.TOKEN_KEY,
        { expiresIn: "2d" }
    );
    return { token, user };
}

module.exports = { registerUser, };
