const express = require('express');
const mysql = require('mysql2');
const {initializeDB} = require('./database/initialize');
var server = express();
initializeDB();
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