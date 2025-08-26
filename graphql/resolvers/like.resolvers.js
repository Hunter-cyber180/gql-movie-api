// * ---- Models ----
const LikeModel = require("../../models/Like");

const likes = async () => await LikeModel.find({});

module.exports = {
    likes,
};
