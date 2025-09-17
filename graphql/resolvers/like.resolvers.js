// * ---- Models ----
const LikeModel = require("../../models/Like");

// * ---- Utils ----
const { likeValidator } = require("../../utils/validators/like.validate");

const likes = async () => {
    try {
        const likes = await LikeModel.find({});
        return likes;
    } catch (error) {
        throw new Error(`Error fetching likes: ${error.message}`);
    }
}

const like = async ({ id: _id }) => {
    try {
        const like = await LikeModel.findOne({ _id });
        if (!like)
            throw new Error("Like not found!")
    } catch (error) {
        throw new Error(`Error fetching like: ${error.message}`);
    }
}

const addLike = async (_, { input }, context) => {
    const { user, food } = input;

    const validateError = likeValidator(input)[0]?.message;
    if (validateError) throw new Error(validateError);

    return await LikeModel.create({ user, food });
}

const deleteLike = async ({ id: _id }) => await LikeModel.findOneAndDelete({ _id });

module.exports = {
    likes,
    like,
    addLike,
    deleteLike,
};
