// * ---- Models ----
const ReplyCommentModel = require("../../models/ReplyComment");

// * ---- Utils ----
const { replyCommentValidator } = require("../../utils/validators/replycomment.validate");
const { authValidator, adminValidator } = require("../../utils/auth");

const replyComments = async () => {
    try {
        const replyComments = await ReplyCommentModel.find({});
        return replyComments;
    } catch (error) {
        throw new Error(`Error fetching reply comments: ${error.message}`);
    }
}

const replyComment = async ({ id: _id }) => {
    try {
        const replyComment = await ReplyCommentModel.findOne({ _id });
        if (!replyComment)
            throw new Error("Reply comment not found!");

        return replyComment;
    } catch (error) {
        throw new Error(`Error fetching reply comment: ${error.message}`);
    }
}

const addReplyComment = async (_, { input }, context) => {
    try {
        const { user, movie, comment, body, likes, dislikes } = input;
        await authValidator(context.req);

        const validateError = replyCommentValidator(input)[0]?.message;
        if (validateError) throw new Error(validateError);

        const newReplyComment = new ReplyCommentModel(
            { user, movie, comment, body, likes, dislikes }
        );

        return newReplyComment.save();
    } catch (error) {
        throw new Error(`Error creating reply comment: ${error.message}`);
    }
};

const deleteReplyComment = async ({ id: _id }) => {
    try {
        await adminValidator(context.req);
        const replyComment = await ReplyCommentModel.findOneAndDelete({ _id });
        if (!replyComment)
            throw new Error("Reply comment not found!");

        return { message: "Reply comment deleted successfully" };
    } catch (error) {
        throw new Error(`Error deleting reply comment: ${error.message}`);
    }
}

module.exports = {
    replyComments,
    replyComment,
    addReplyComment,
    deleteReplyComment,
};
