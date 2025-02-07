import validationRequest from '../middlewares/validationRequest.js';
import {validateProduct,validateIdParam} from '../validations/validationsRule.js';
import productController from '../controller/product.controller.js';
import { verifyToken, isVendorOrSeller } from '../middlewares/jwtAuth.js';
import express from 'express';

const productRouter = express.Router();

productRouter.post('/create',verifyToken, isVendorOrSeller,validationRequest(validateProduct), productController.createProduct);  
productRouter.get('/', productController.getAllProducts);  
productRouter.get('/:id',validationRequest(validateIdParam), productController.getProductById);  
productRouter.put('/update/:id', verifyToken, isVendorOrSeller, validationRequest(validateIdParam), productController.updateProduct);  
productRouter.delete('/delete/:id',verifyToken, isVendorOrSeller,validationRequest(validateIdParam), productController.deleteProduct);  

export default productRouter;