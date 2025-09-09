const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

const authValidator = async (req) => {
    if (!req)
        throw new Error("Please login first!");

    const authHeader = req.headers.authorization;
    if (!authHeader)
        throw new Error("Authorization header is missing!");

    const token = authHeader.replace("Bearer ", "");
    if (!token)
        throw new Error("No token found in authorization header!");

    try {
        const { id } = jwt.verify(token, process.env.TOKEN_KEY);

        const user = await UserModel.findById(id);
        if (!user)
            throw new Error("User not found!");

        return user;
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            throw new Error("Invalid token!");
        }
        if (error instanceof jwt.TokenExpiredError) {
            throw new Error("Token expired!");
        }

        throw error;
    }
};
