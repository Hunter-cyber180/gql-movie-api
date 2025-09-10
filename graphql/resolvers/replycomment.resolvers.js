// * ---- Models ----
const ReplyCommentModel = require("../../models/ReplyComment");

// * ---- Utils ----
const { replyCommentValidator } = require("../../utils/validators/replycomment.validate");
const { authValidator, adminValidator } = require("../../utils/auth");

const replyComments = async () => await ReplyCommentModel.find({});

const replyComment = async ({ id: _id }) => await ReplyCommentModel.findOne({ _id });

const addReplyComment = async (_, args, context) => {
    const { user, movie, comment, body, likes, dislikes } = args;
    await authValidator(context.req);
    await replyCommentValidator(context.req);
    return await ReplyCommentModel.create(
        { user, movie, comment, body, likes, dislikes }
    );
};

const deleteReplyComment = async ({ id: _id }) => {
    await adminValidator(context.req);
    await ReplyCommentModel.findOneAndDelete({ _id });
}

module.exports = {
    replyComments,
    replyComment,
    addReplyComment,
    deleteReplyComment,
};
