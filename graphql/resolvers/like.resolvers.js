// * ---- Models ----
const LikeModel = require("../../models/Like");

const likes = async () => await LikeModel.find({});

const like = async ({ id: _id }) => await LikeModel.findOne({ _id });

module.exports = {
    likes,
    like,
};
