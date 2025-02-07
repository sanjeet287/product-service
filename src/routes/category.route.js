import validationRequest from '../middlewares/validationRequest.js';
import {validateCategory,validateIdParam} from '../validations/validationsRule.js';
import categoryController from '../controller/category.controller.js';
import { isVendorOrSeller, verifyToken} from '../middlewares/jwtAuth.js';
import express from 'express';



const categoryRouter = express.Router();

categoryRouter.post('/create',verifyToken,isVendorOrSeller,validationRequest(validateCategory), categoryController.addToCategory);  
categoryRouter.get('/', categoryController.getAllCategories);  
categoryRouter.get('/:id',verifyToken,validationRequest(validateIdParam), categoryController.getCategoryById);  
categoryRouter.put('/update/:id',verifyToken,isVendorOrSeller,validationRequest(validateIdParam), categoryController.updateCategory);  
categoryRouter.delete('/delete/:id',verifyToken,isVendorOrSeller,validationRequest(validateIdParam), categoryController.deleteCategory);  

export default categoryRouter;