import Product from '../models/product.schema.js';

class ProductRepository {
    // Create a product
    async createProduct(productData) {
        try {
            const product = new Product(productData);
            await product.save();
            return product;
        } catch (err) {
            throw new Error('Error creating product: ' + err.message);
        }
    }

    // Get all products
    async getAllProducts() {
        try {
            console.log("Fetching all products from DB...");
            return await Product.find().populate('category');
        } catch (err) {
            throw new Error('Error fetching products: ' + err.message);
        }
    }

    // Get a product by ID
    async getProductById(productId) {
        try {
            return await Product.findById(productId).populate('category');
        } catch (err) {
            throw new Error('Error fetching product: ' + err.message);
        }
    }

    // Update a product
    async updateProduct(productId, updatedData) {
        try {
            return await Product.findByIdAndUpdate(productId, updatedData, { new: true });
        } catch (err) {
            throw new Error('Error updating product: ' + err.message);
        }
    }

    // Delete a product
    async deleteProduct(productId) {
        try {
            return await Product.findByIdAndDelete(productId);
        } catch (err) {
            throw new Error('Error deleting product: ' + err.message);
        }
    }
}

export default new ProductRepository();
