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
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', (req, res, next) => {
    res.send('<form action="/user-details" method="POST"><input id="name" name="name"/><button type="submit">Send</button></form>')
});

app.post('/user-details', (req, res, next) => {
    console.log('----------', req.body);
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hi from Express !!</h1>');
})

app.listen(3000)