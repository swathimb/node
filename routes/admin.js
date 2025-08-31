const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/user-details" method="POST"><input id="name" name="name"/><button type="submit">Send</button></form>')
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
});

router.post('/add-product', (req, res, next) => {
    console.log('----------', req.body);
    res.redirect('/')
});

module.exports = router