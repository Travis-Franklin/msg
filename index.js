const http = require('http');
const express = require('express');
// const albumData = require('./albums');
const es6Renderer = require('express-es6-template-engine');


const app = express();
const server = http.createServer(app);

const PORT = 3000;

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');




server.listen(PORT, () => {
    console.log('im listening');
});