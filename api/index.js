//imports
const express = require('express');
const mongoose = require('mongoose');
const dbConn = require('./config/database')
const categories = require('./routes/category');
const categoryModel = require('./models/categoryModel');
const cors = require('cors'); // allow acces controls
const app = express();
const port = 3000;


//db connection 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbConn);
}

// Enable CORS for all routes
app.use(cors());
app.use('/categories', categories);

app.get('/', (req, res) => {
  return categoryModel.find({}).then((categoryModel) => {
    res.status(200).json({categoryModel})
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});