import categoryRepository from '../repositories/category.repository.js';

class CategoryService {
    // Create category
    async createCategory(categoryData) {
        return await categoryRepository.createCategory(categoryData);
    }

    // Get all categories
    async getAllCategories() {
        return await categoryRepository.getAllCategories();
    }

    // Get category by ID
    async getCategoryById(categoryId) {
        return await categoryRepository.getCategoryById(categoryId);
    }

    // Update category
    async updateCategory(categoryId, updatedData) {
        return await categoryRepository.updateCategory(categoryId, updatedData);
    }

    // Delete category
    async deleteCategory(categoryId) {
        return await categoryRepository.deleteCategory(categoryId);
    }
}

export default new CategoryService();
