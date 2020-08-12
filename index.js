const http = require('http');
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const app = express();
const server = http.createServer(app);
const PORT = 8999;
const db = require('./models/connection')

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');
async function insertMsgs(){
    try {
        console.log('inside insertMsgs');
        const insertMessage = await db.any (`
         insert into msg_txt
         (msg_id, msg_txt) 
         values
         (10, 'Successfully Inserted')`)
    }
    catch (err){
        console.log("Error inside insertMsgs")
    }
}

insertMsgs();

async function listMsgs(){
    try{
        console.log('inside try')
        const allMsgs = await db.any(`
        select * from msgs`);
        console.log(allMsgs);
    } catch (err) {
        console.log('There is an error inside listMsgs')
    };
}

listMsgs();


server.listen(PORT, () => {
    console.log('im listening');
});