import Category from '../models/category.schema.js';

class CategoryRepository {
    // Create a category
    async createCategory(categoryData) {
        try {
            const category = new Category(categoryData);
            await category.save();
            return category;
        } catch (err) {
            throw new Error('Error creating category: ' + err.message);
        }
    }

    // Get all categories
    async getAllCategories() {
        try {
            return await Category.find();
        } catch (err) {
            throw new Error('Error fetching categories: ' + err.message);
        }
    }

    // Get a category by ID
    async getCategoryById(categoryId) {
        try {
            return await Category.findById(categoryId);
        } catch (err) {
            throw new Error('Error fetching category: ' + err.message);
        }
    }

    // Update a category
    async updateCategory(categoryId, updatedData) {
        try {
            return await Category.findByIdAndUpdate(categoryId, updatedData, { new: true });
        } catch (err) {
            throw new Error('Error updating category: ' + err.message);
        }
    }

    // Delete a category
    async deleteCategory(categoryId) {
        try {
            return await Category.findByIdAndDelete(categoryId);
        } catch (err) {
            throw new Error('Error deleting category: ' + err.message);
        }
    }
}

export default new CategoryRepository();
