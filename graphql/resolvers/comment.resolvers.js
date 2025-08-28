// * ---- Models ----
const CommentModel = require("../../models/Comment");

const comments = async () => await CommentModel.find({});

const comment = async ({ id: _id }) => await CommentModel.findOne({ _id });

const addComment = async (_, args) => {
    const { user, movie, body, likes, dislikes } = args;
    return await CommentModel.create({ user, movie, body, likes, dislikes });
};

module.exports = {
    comments,
    comment,
    addComment,
};
