const {Sequelize} = require('sequelize');

var DB = new Sequelize({
    database: 'kasalxona',
    username: 'root',
    password: 'android6699',
    dialect: 'mysql'
});

module.exports ={
    DB
};