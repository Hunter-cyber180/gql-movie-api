// * ---- Models ----
const CommentModel = require("../../models/Comment");

// * ---- Utils ----
const { commentValidator } = require("../../utils/validators/comment.validate");
const { adminValidator } = require("../../utils/auth");

const comments = async () => {
    try {
        const comments = await CommentModel.find({});
        return comments;
    } catch (error) {
        throw new Error(`Error fetching comments: ${error.message}`);
    }
}

const comment = async ({ id: _id }) => {
    try {
        const comment = await CommentModel.findOne({ _id });
        if (!comment)
            throw new Error("Comment not found!");

        return comment;
    } catch (error) {
        throw new Error(`Error fetching comment: ${error.message}`);
    }
}

const addComment = async (_, { input }, context) => {
    const { user, movie, body, likes, dislikes } = input;

    const validateError = commentValidator(input)[0]?.message;
    if (validateError) throw new Error(validateError);

    return await CommentModel.create({ user, movie, body, likes, dislikes });
};

const deleteComment = async ({ id: _id }) => {
    await adminValidator(context.req);
    await CommentModel.findOneAndDelete({ _id });
}

module.exports = {
    comments,
    comment,
    addComment,
    deleteComment,
};
