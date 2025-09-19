// * ---- Models ----
const CategoryModel = require("../../models/Category");

// * ---- Utils ----
const { categoryValidator } = require("../../utils/validators/category.validate");
const { adminValidator } = require("../../utils/auth");

const categories = async () => {
    try {
        // Query the database to find all categories
        const categories = await CategoryModel.find({});
        // Return the retrieved categories array
        return categories;
    } catch (error) {
        // If an error occurs, throw a new error with a descriptive message
        throw new Error(`Error fetching categories: ${error.message}`);
    }
}

// Fetches a single category by its ID
const category = async ({ id: _id }) => {
    try {
        // Find the category in the database using the provided ID
        const category = await CategoryModel.findOne({ _id });

        // If no category is found, throw a "not found" error
        if (!category)
            throw new Error("Category not found");

        return category;
    } catch (error) {
        // Catch any errors and throw a new error with a descriptive message
        throw new Error(`Error fetching category: ${error.message}`);
    }
}

// Creates and saves a new category in the database
const addCategory = async (_, { input }, context) => {
    try {
        const { title, icon } = input;
        
        // Validate admin privileges from request context
        await adminValidator(context.req);

        // Validate category input data
        const validateError = categoryValidator(input)[0]?.message;
        if (validateError) throw new Error(validateError);

        // Create new category instance
        const newCategory = new CategoryModel({ title, icon });
        
        // Save the new category to database and return it
        return await newCategory.save();
    } catch (error) {
        // Catch any errors and throw with descriptive message
        throw new Error(`Error Creating category: ${error.message}`);
    }
}

const editCategory = async ({ id: _id }, { input }, context) => {
    try {
        const { title, icon } = input;
        await adminValidator(context.req);

        const validateError = categoryValidator(input)[0]?.message;
        if (validateError) throw new Error(validateError);

        const updatedCategory = await CategoryModel.findOneAndUpdate({ _id }, { title, icon });
        return updatedCategory;
    } catch (error) {
        throw new Error(`Error updating category: ${error.message}`);
    }
}

const deleteCategory = async ({ id: _id }, args, context) => {
    try {
        await adminValidator(context.req);
        const category = await CategoryModel.findOneAndDelete({ _id });
        if (!category)
            throw new Error("Category not found");

        return { message: "Category deleted successfully" };
    } catch (error) {
        throw new Error(`Error deleting category: ${error.message}`);
    }
}

module.exports = {
    categories,
    category,
    addCategory,
    editCategory,
    deleteCategory,
};
