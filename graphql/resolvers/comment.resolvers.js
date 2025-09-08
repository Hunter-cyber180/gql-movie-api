// * ---- Models ----
const CommentModel = require("../../models/Comment");

// * ---- Utils ----
const { commentValidator } = require("../../utils/validators/comment.validate");

const comments = async () => await CommentModel.find({});

const comment = async ({ id: _id }) => await CommentModel.findOne({ _id });

const addComment = async (_, args, context) => {
    const { user, movie, body, likes, dislikes } = args;
    await commentValidator(context.req);
    return await CommentModel.create({ user, movie, body, likes, dislikes });
};

const deleteComment = async ({ id: _id }) => {
    // TODO => check user role
    await CommentModel.findOneAndDelete({ _id });
}

module.exports = {
    comments,
    comment,
    addComment,
    deleteComment,
};
