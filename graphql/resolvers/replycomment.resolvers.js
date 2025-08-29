// * ---- Models ----
const ReplyCommentModel = require("../../models/ReplyComment");

const replyComments = async () => await ReplyCommentModel.find({});

module.exports = {
    replyComments,
};
