// * ---- Models ----
const ReplyCommentModel = require("../../models/ReplyComment");

// * ---- Utils ----
const { replyCommentValidator } = require("../../utils/validators/replycomment.validate");

const replyComments = async () => await ReplyCommentModel.find({});

const replyComment = async ({ id: _id }) => await ReplyCommentModel.findOne({ _id });

const addReplyComment = async (_, args, context) => {
    const { user, movie, comment, body, likes, dislikes } = args;
    await replyCommentValidator(context.req);
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
