const express = require('express');
var MainRouter = express.Router();
MainRouter.get('/', (req, res)=>{
   // Patient.findOrCreate({where: {name: 'John Doe', age: 25}});
    var Patient = {
        name: 'John Doe',
        age: 22,
        city: 'Tashkent'
    }
    res.render('main', {Patient});
});
module.exports = {
    MainRouter
}