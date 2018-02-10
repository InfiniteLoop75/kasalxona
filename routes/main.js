const express = require('express');
const bodyParser = require('body-parser');
const {Sequelize} = require('sequelize');
const {DB} = require('../database/db');
const createTables = require('../database/queries/createTables');

var MainRouter = express.Router();
MainRouter.get('/createPatient', (req, res)=>{
    
    res.render('CreatePatient');
});
// MainRouter.post('/createPatient', (req, res)=>{

//     res.redirect('/');
// });
MainRouter.get('/', (req, res)=>{

});
module.exports = {
    MainRouter
}