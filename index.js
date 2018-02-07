const express = require('express');
const mysql = require('mysql2');
const logger = require('morgan');
const bodyParser = require('body-parser');
const {MainRouter} = require('./routes/main');
const {initializeDB} = require('./database/initialize');
//const {Patient} = require('./models/patient');
var server = express();

server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.set('view engine', 'ejs');
server.use(MainRouter);
server.listen(3000, ()=>{
    console.log("Server PORT 3000da ko'tarildi");
})