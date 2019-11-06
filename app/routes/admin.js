const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');
const productsControlles = require("../controllers/products");

const router = express.Router();

router.get('/add-product', productsControlles.getAddProduct);
router.post('/add-product', productsControlles.postAddProduct);

module.exports = router