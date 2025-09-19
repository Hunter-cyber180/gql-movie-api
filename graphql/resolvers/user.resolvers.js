// * ---- Models ----
const UserModel = require("../../models/User");

// ** ---- Packages ----
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// * ---- Utils ----
const { registerValidator, loginValidator } = require(
    "../../utils/validators/user.validate"
);
const { adminValidator } = require("../../utils/auth");

const users = async () => await UserModel.find({});

const user = async ({ id: _id }) => await UserModel.findOne({ _id });

const deleteUser = async ({ id: _id }) => {
    await adminValidator(context.req);
    await UserModel.findOneAndDelete({ _id });
}

const registerUser = async (_, { input }) => {
    try {
        const validateError = registerValidator(input)[0]?.message;
        if (validateError) throw new Error(validateError);

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
    } catch (error) {
        throw new Error(`Error in register user: ${error.message}`);
    }
}

const loginUser = async (_, { input }) => {
    try {
        const validateError = loginValidator(input)[0]?.message;
        if (validateError) throw new Error(validateError);

        const user = await UserModel.findOne({
            $or: [{ email: input.email }, { phoneNumber: input.phoneNumber }]
        });
        if (!user) throw new Error("Invalid credentials");

        const validPassword = await bcrypt.compare(input.password, user.password);
        if (!validPassword) throw new Error("Invalid credentials");

        const token = jwt.sign(
            { id: user._id },
            process.env.TOKEN_KEY,
            { expiresIn: "2d" }
        );
        return { token, user };
    } catch (error) {
        throw new Error(`Error in login user: ${error.message}`);
    }
}

module.exports = { registerUser, loginUser, users, user, deleteUser };
