/*
Traditional way of handeling request in vanilla nodejs without express
const http = require('http');

function requestListners(req, res) {
    console.log(req)
    console.log(res)
    res.setHeader('Content-Type', 'text/html');
    res.write('<div>Hi</div>');
    res.end();
}

const server = http.createServer(requestListners);

server.listen(3000)

*/

const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars')

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin')
const notFoundController = require('./controllers/notFound')

const app = express();

//configuring handlebar in express
app.engine('hbs', engine({
    extname: 'hbs',
    layoutsDir: 'views',
    defaultLayout: false
}));
app.set('view engine', 'hbs');
app.set('views', 'views')

app.use('/admin', adminRoutes); // works as a valid middleware

app.use(shopRoutes);

//Not found page route. should be added at end
app.use(notFoundController.notFound)

app.listen(3000)

module.exports = path.dirname(require.main.filename);
