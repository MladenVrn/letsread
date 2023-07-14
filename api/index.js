//imports
const express = require('express');
const mongoose = require('mongoose');
const dbConn = require('./config/database')
const categories = require('./routes/category');
const registration = require('./routes/authentication');
const categoryModel = require('./models/categoryModel');
const cors = require('cors'); // allow acces controls
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


//db connection 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbConn);
}

// Enable CORS for all routes
app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
// to support JSON-encoded bodies
app.use(express.json());       
app.use(express.urlencoded());

app.use('/categories', categories);
app.use('/auth', registration);

app.get('/', (req, res) => {
  return categoryModel.find({}).then((categoryModel) => {
    res.status(200).json({categoryModel})
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});