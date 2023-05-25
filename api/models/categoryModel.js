//category Database modell using Mongoose
const mongoose = require('mongoose');

const categories = new mongoose.Schema({ 
    _id: Number, 
    category: String 
});

const categoryModel = mongoose.model('Category',categories);

module.exports = categoryModel;