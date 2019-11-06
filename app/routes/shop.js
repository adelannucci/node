const path = require('path');
const express = require('express');
const productsControlles = require("../controllers/products");
const router = express.Router();

router.get('/', productsControlles.getProducts);

module.exports = router;