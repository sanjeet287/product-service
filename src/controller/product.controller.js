import productService from '../services/product.service.js';

class ProductController {
    // Create Product
    async createProduct(req, res) {
        try {
            const product = await productService.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Get All Products
    async getAllProducts(req, res) {
        try {
            const products = await productService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Get Product by ID
    async getProductById(req, res) {
        try {

            console.log("Fetching product with ID:", req.params.id);
            const product = await productService.getProductById(req.params.id);

            if (!product) return res.status(404).json({ message: 'Product not found' });
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Update Product
    async updateProduct(req, res) {
        try {
            const updatedProduct = await productService.updateProduct(req.params.id, req.body);
            if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Delete Product
    async deleteProduct(req, res) {
        try {
            const deletedProduct = await productService.deleteProduct(req.params.id);
            if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
            res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new ProductController();
