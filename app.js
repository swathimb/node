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

const routes = require('./routes/shop');
const adminRoutes = require('./routes/admin')

const app = express();

app.use(adminRoutes); // works as a valid middleware

app.use(routes);

app.listen(3000)