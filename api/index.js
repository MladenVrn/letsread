const express = require('express');
const categories = require('./routes/category');
const app = express();
const port = 3000;

app.use('/categories', categories);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});