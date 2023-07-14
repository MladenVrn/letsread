//category Database modell using Mongoose
const mongoose = require('mongoose');

const books = new mongoose.Schema({ 
    _id: Number, 
    name: String,
    category_id: Number,
    book_id: Number,
    rating: Number,
    description: String,
    image: String
});

const bookModel = mongoose.model('books',books);

module.exports = bookModel;