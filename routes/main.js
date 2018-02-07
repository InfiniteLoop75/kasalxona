const express = require('express');
const bodyParser = require('body-parser');
const {Patient} = require('../models/patient');
const {Sequelize} = require('sequelize');
const {DB} = require('../database/db');
var MainRouter = express.Router();
MainRouter.get('/createPatient', (req, res)=>{
    res.render('CreatePatient');
});
MainRouter.post('/createPatient', (req, res)=>{
   Patient.create({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    });
    res.redirect('/');
});
MainRouter.get('/', (req, res)=>{
   // Patient.findOrCreate({where: {name: 'John Doe', age: 25}});
    
        Patient.findAll({})
        .then((patients)=>{
            var pattients = [];
            for(var i = 0; i<patients.length; i++){
                var element = patients[i];
                pattients.push(element);
            }
            return res.render('main', {pattients});
        }).catch((err)=>{
            console.log(err);
        });

       
  
    
    
    
    
});
module.exports = {
    MainRouter
}