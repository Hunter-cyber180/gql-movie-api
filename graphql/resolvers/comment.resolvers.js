// * ---- Models ----
const CommentModel = require("../../models/Comment");

const comments = async () => await CommentModel.find({});

module.exports = {
    comments,
};
