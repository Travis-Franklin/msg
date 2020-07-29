const http = require('http');
const express = require('express');
const es6Renderer = require('express-es6-template-engine');

const db = require('./models/connection')

const app = express();
const server = http.createServer(app);

const PORT = 9000;

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

async function listMsgs(){
    const allMsgs = await db.any(`
    select * from msgs`);
    console.log(allMsgs);
}

listMsgs();

server.listen(PORT, () => {
    console.log('im listening');
});