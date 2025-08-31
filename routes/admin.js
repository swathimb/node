const express = require('express');
const bodyParser = require('body-parser');

const productController = require('../controllers/products');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/add-product', productController.getAddProduct);

router.post('/add-product', productController.postAddProduct);

module.exports = router