const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.use('/user', (req, res, next) => {
    res.send('<form action="/user-details" method="POST"><input id="name" name="name"/><button type="submit">Send</button></form>')
});

router.post('/user-details', (req, res, next) => {
    console.log('----------', req.body);
    res.redirect('/')
});

module.exports = router