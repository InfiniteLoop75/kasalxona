const express = require('express');
const mysql = require('mysql2');
const logger = require('morgan');
const bodyParser = require('body-parser');
const {initializeDB} = require('./database/initialize');
var server = express();

initializeDB();
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.set('view engine', 'ejs');
server.get('/', (req, res)=>{
    var Person = {
        name: 'John Doe',
        age: 22,
        married: false,
        city: 'Tashkent'
    }

    res.render('main', {Person});
})
server.listen(3000, ()=>{
    console.log("Server PORT 3000da ko'tarildi");
})