//category Database modell using Mongoose
const mongoose = require('mongoose');

const users = new mongoose.Schema({ 
    _id: Number, 
    username: String,
    password: String,
    user_id: Number
});

const userModel = mongoose.model('user',users);

module.exports = userModel;