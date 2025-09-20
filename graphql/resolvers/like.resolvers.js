// * ---- Models ----
const LikeModel = require("../../models/Like");

// * ---- Utils ----
const { likeValidator } = require("../../utils/validators/like.validate");

// Fetches all likes from the database
const likes = async () => {
    try {
        // Retrieve all likes from the database
        const likes = await LikeModel.find({});

        return likes;
    } catch (error) {
        // Catch any errors and throw with descriptive message
        throw new Error(`Error fetching likes: ${error.message}`);
    }
}

// Fetches a single like from the database by its ID
const like = async ({ id: _id }) => {
    try {
        // Find the like by its ID in the database
        const like = await LikeModel.findOne({ _id });

        // Check if the like exists
        if (!like)
            throw new Error("Like not found!");

        return like;
    } catch (error) {
        // Catch any errors and throw with descriptive message
        throw new Error(`Error fetching like: ${error.message}`);
    }
}

const addLike = async (_, { input }, context) => {
    try {
        const { user, food } = input;

        const validateError = likeValidator(input)[0]?.message;
        if (validateError) throw new Error(validateError);

        const newLike = new LikeModel({ user, food });
        return await newLike.save();
    } catch (error) {
        throw new Error(`Error creating like: ${error.message}`);
    }
}

const deleteLike = async ({ id: _id }) => {
    try {
        const like = await LikeModel.findOneAndDelete({ _id });
        if (!like)
            throw new Error("Like not found!");

        return { message: "Like deleted successfully" };
    } catch (error) {
        throw new Error(`Error deleting like: ${error.message}`);
    }
}

module.exports = {
    likes,
    like,
    addLike,
    deleteLike,
};
