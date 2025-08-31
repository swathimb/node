const path = require('path');

let getAddProduct = (req, res, next) => {
    // res.send('<form action="/user-details" method="POST"><input id="name" name="name"/><button type="submit">Send</button></form>')
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
};

let postAddProduct = (req, res, next) => {
    console.log('----------', req.body);
    res.redirect('/')
}

let getProducts = (req, res, next) => {
    // res.send('<h1>Hi from Express !!</h1>');
    // res.sendFile('/view/shop.html') cannot do this because '/' points to root folder 
    // of OS and not the project folder
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
}

let getProductById = (req, res, next) => {
    console.log(req.params.productId);
    console.log(req.query);

    res.status(404).render('product-details', { productId: req.params.productId })
}

module.exports = {
    getAddProduct,
    postAddProduct,
    getProducts,
    getProductById
}