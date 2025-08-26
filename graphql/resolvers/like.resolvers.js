// * ---- Models ----
const LikeModel = require("../../models/Like");

const likes = async () => await LikeModel.find({});

const like = async ({ id: _id }) => await LikeModel.findOne({ _id });

const addLike = async (_, args, context) => {
    const { user, food } = args;
    return await LikeModel.create({ user, food });
}

module.exports = {
    likes,
    like,
    addLike,
};
