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

const replyComment = async ({ id: _id }) => await ReplyCommentModel.findOne({ _id });

const addReplyComment = async (_, { input }, context) => {
    const { user, movie, comment, body, likes, dislikes } = input;
    await authValidator(context.req);

    const validateError = replyCommentValidator(input)[0]?.message;
    if (validateError) throw new Error(validateError);

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
