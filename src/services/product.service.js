import productRepository from '../repositories/product.repository.js';

class ProductService {
    // Create product
    async createProduct(productData) {
        return await productRepository.createProduct(productData);
    }

    // Get all products
    async getAllProducts() {
        return await productRepository.getAllProducts();
    }

    // Get product by ID
    async getProductById(productId) {
        return await productRepository.getProductById(productId);
    }

    // Update product
    async updateProduct(productId, updatedData) {
        return await productRepository.updateProduct(productId, updatedData);
    }

    // Delete product
    async deleteProduct(productId) {
        return await productRepository.deleteProduct(productId);
    }
}

export default new ProductService();
