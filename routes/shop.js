const express = require('express');

const router = express.Router();

router.get("/products", (req, res, next) => {
    console.log("list of products")
    res.send('<h1> List of Products </h1>')
})

module.exports = router;