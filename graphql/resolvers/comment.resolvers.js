// * ---- Models ----
const CommentModel = require("../../models/Comment");

// * ---- Utils ----
const { commentValidator } = require("../../utils/validators/comment.validate");
const { adminValidator } = require("../../utils/auth");

// Fetches all comments from the database
const comments = async () => {
    try {
        // Retrieve all comments from the database
        const comments = await CommentModel.find({});

        // Return the fetched comments
        return comments;
    } catch (error) {
        // Catch any errors and throw with descriptive message
        throw new Error(`Error fetching comments: ${error.message}`);
    }
}

// Fetches a single comment from the database by its ID
const comment = async ({ id: _id }) => {
    try {
        // Find the comment by its ID in the database
        const comment = await CommentModel.findOne({ _id });

        // Check if the comment exists
        if (!comment)
            throw new Error("Comment not found!");

        return comment;
    } catch (error) {
        // Catch any errors and throw with descriptive message
        throw new Error(`Error fetching comment: ${error.message}`);
    }
}

const addComment = async (_, { input }, context) => {
    try {
        const { user, movie, body, likes, dislikes } = input;

        const validateError = commentValidator(input)[0]?.message;
        if (validateError) throw new Error(validateError);

        const newComment = new CommentModel({ user, movie, body, likes, dislikes });
        return await newComment.save();
    } catch (error) {
        throw new Error(`Error creating comment: ${error.message}`);
    }
};

const deleteComment = async ({ id: _id }) => {
    try {
        await adminValidator(context.req);
        const comment = CommentModel.findOneAndDelete({ _id });
        if (!comment)
            throw new Error("Comment not found!");

        return { message: "Comment deleted successfully" };
    } catch (error) {
        throw new Error(`Error deleting comment: ${error.message}`);
    }
}

module.exports = {
    comments,
    comment,
    addComment,
    deleteComment,
};
