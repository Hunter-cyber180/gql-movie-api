// * ---- Models ----
const ReplyCommentModel = require("../../models/ReplyComment");

const replyComments = async () => await ReplyCommentModel.find({});

const replyComment = async ({ id: _id }) => await ReplyCommentModel.findOne({ _id });

module.exports = {
    replyComments,
    replyComment,
};
