const express = require('express');
const router = express.Router();
const bookModel = require('../models/bookModel');


//display categories
router.get("/romane", (req,res,next) => {
    return bookModel.find({category_id: 1001}).then((bookModel)=>{
        res.status(200).json({bookModel})
    });

});

module.exports = router;