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

const category = async ({ id: _id }) => {
    try {
        const category = await CategoryModel.findOne({ _id });
        if (!category)
            throw new Error("Category not found");

        return category;
    } catch (error) {
        throw new Error(`Error fetching category: ${error.message}`);
    }
}

const addCategory = async (_, { input }, context) => {
    try {
        const { title, icon } = input;
        await adminValidator(context.req);

        const validateError = categoryValidator(input)[0]?.message;
        if (validateError) throw new Error(validateError);

        const newCategory = new CategoryModel({ title, icon });
        return await newCategory.save();
    } catch (error) {
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
