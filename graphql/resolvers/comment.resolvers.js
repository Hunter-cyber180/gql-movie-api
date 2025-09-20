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

// Creates a new comment in the database
const addComment = async (_, { input }, context) => {
    try {
        const { user, movie, body, likes, dislikes } = input;

        // Validate comment input data
        const validateError = commentValidator(input)[0]?.message;
        if (validateError) throw new Error(validateError);

        // Create a new comment instance with the provided data
        const newComment = new CommentModel({ user, movie, body, likes, dislikes });

        return await newComment.save();
    } catch (error) {
        // Catch any errors and throw with descriptive message
        throw new Error(`Error creating comment: ${error.message}`);
    }
};

// Deletes a comment from the database by its ID
const deleteComment = async ({ id: _id }, args, context) => {
    try {
        // Validate admin privileges before allowing deletion
        await adminValidator(context.req);

        // Find the comment by ID and delete it
        const comment = await CommentModel.findOneAndDelete({ _id });

        // Check if comment was found and deleted
        if (!comment)
            throw new Error("Comment not found!");

        return { message: "Comment deleted successfully" };
    } catch (error) {
        // Catch any errors and throw with descriptive message
        throw new Error(`Error deleting comment: ${error.message}`);
    }
}

module.exports = {
    comments,
    comment,
    addComment,
    deleteComment,
};
