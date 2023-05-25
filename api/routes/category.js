const express = require('express')
const router = express.Router()

//display categories
router.get("/", (req,res,next) => {
    res.send("hello categories");
});

module.exports = router;