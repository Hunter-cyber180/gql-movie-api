// * ---- Models ----
const ReplyCommentModel = require("../../models/ReplyComment");

const replyComments = async () => await ReplyCommentModel.find({});

const replyComment = async ({ id: _id }) => await ReplyCommentModel.findOne({ _id });

const addReplyComment = async (_, args) => {
    const { user, movie, comment, body, likes, dislikes } = args;
    return await ReplyCommentModel.create(
        { user, movie, comment, body, likes, dislikes }
    );
};

const deleteReplyComment = async ({ id: _id }) => {
    // TODO => check user role
    await ReplyCommentModel.findOneAndDelete({ _id });
}

module.exports = {
    replyComments,
    replyComment,
    addReplyComment,
    deleteReplyComment,
};
