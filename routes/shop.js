const express = require('express');

const productController = require('../controllers/products')

const router = express.Router();

router.get('/', productController.getProducts);

router.get('/product/:productId', productController.getProductById)

module.exports = router;

/*
__dirname
 is a global variable provided by nodemon, that holds the 
 absolute path of the project folder
 it gives the path of the folder in which it is being used
 in this example dirname -> /routes
 since setHeapSnapshotNearHeapLimit.html is in views folder '../' is added in the path to travel one step back
 */