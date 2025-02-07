import { body, param, validationResult } from 'express-validator';

export const validateProduct = [
    body('name').notEmpty().withMessage('Product name is required'),
    body('description')
        .isLength({ min: 10 })
        .withMessage('Description must be at least 10 characters long'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('quantity').isInt({ min: 0 }).withMessage('Quantity must be a non-negative integer'),
    body('category').notEmpty().withMessage('Category is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

export const validateIdParam = [
    param('id').isMongoId().withMessage('Invalid ID format'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

export const validateCategory = [
    body('name').notEmpty().withMessage('Category name is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
