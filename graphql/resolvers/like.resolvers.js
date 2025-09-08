// * ---- Models ----
const LikeModel = require("../../models/Like");

// * ---- Utils ----
const { likeValidator } = require("../../utils/validators/like.validate");

const likes = async () => await LikeModel.find({});

const like = async ({ id: _id }) => await LikeModel.findOne({ _id });

const addLike = async (_, args, context) => {
    const { user, food } = args;
    await likeValidator(context.req);
    return await LikeModel.create({ user, food });
}

const deleteLike = async ({ id: _id }) => await LikeModel.findOneAndDelete({ _id });

module.exports = {
    likes,
    like,
    addLike,
    deleteLike,
};
