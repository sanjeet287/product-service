import categoryService from '../services/category.service.js';

class CategoryController {
    // Create Category
    async addToCategory(req, res) {
        try {
            const category = await categoryService.createCategory(req.body);
            res.status(201).json(category);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Get All Categories
    async getAllCategories(req, res) {
        try {
            const categories = await categoryService.getAllCategories();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Get Category by ID
    async getCategoryById(req, res) {
        try {
            const category = await categoryService.getCategoryById(req.params.id);
            if (!category) return res.status(404).json({ message: 'Category not found' });
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Update Category
    async updateCategory(req, res) {
        try {
            const updatedCategory = await categoryService.updateCategory(req.params.id, req.body);
            if (!updatedCategory) return res.status(404).json({ message: 'Category not found' });
            res.status(200).json(updatedCategory);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Delete Category
    async deleteCategory(req, res) {
        try {
            const deletedCategory = await categoryService.deleteCategory(req.params.id);
            if (!deletedCategory) return res.status(404).json({ message: 'Category not found' });
            res.status(200).json({ message: 'Category deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new CategoryController();
