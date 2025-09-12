// * ---- Models ----
const LikeModel = require("../../models/Like");

// * ---- Utils ----
const { likeValidator } = require("../../utils/validators/like.validate");

const likes = async () => await LikeModel.find({});

const like = async ({ id: _id }) => await LikeModel.findOne({ _id });

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
