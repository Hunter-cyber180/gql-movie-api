// * ---- Models ----
const CommentModel = require("../../models/Comment");

const comments = async () => await CommentModel.find({});

const comment = async ({ id: _id }) => await CommentModel.findOne({ _id });

module.exports = {
    comments,
    comment,
};
