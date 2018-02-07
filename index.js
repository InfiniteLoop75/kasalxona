const express = require('express');
const mysql = require('mysql2');
const {DB} = require('./database/db');
var server = express();

DB
   .authenticate()
   .then(()=>{
       console.log("Connected to database");
   }).catch((err)=>{
        console.log('Unable to connect to database' + err);
   });
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
    console.log('Server is up and running on port 3000');
})