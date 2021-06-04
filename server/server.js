const express = require('express');
const homeRouter = require('../routes/home');
const readRouter = require('../routes/read');

const server = new express();

server.use(express.json());
server.use(express.urlencoded({extended:false}));

server.use('/',homeRouter);
server.use('/api',readRouter);

server.use((req,res,next)=>{
    res.status(404).send('API Url not found');
});

server.use((err,req,res,next)=>{
    if(err) console.error(err.stack);

    res.status(500).send('Something went wrong!');
});

module.exports = server;
