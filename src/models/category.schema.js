import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category name is required'],
        unique: true,
        trim: true,
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: null, 
    },
}, { timestamps: true });

const Category = mongoose.model('Category', CategorySchema);
export default Category;
