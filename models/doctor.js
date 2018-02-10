const Sequelize = require('sequelize');
const passportLocalSequelize = require('passport-local-sequelize');
const {DoctorPosition} = require('./doctor_positions');
const {DB} = require('../database/db');

// const {initializeDB} = require('../database/initialize');
//initializeDB();
const Doctor = DB.define('Doctor',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "No Name"
    },
    typeId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'doc_pos',
            key: 'id'
        }
    },
    login:{
        type: Sequelize.STRING,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
    },
    phoneNum: {
        type: Sequelize.STRING,
        unique: true
    },
    isEmployed:{
        type: Sequelize.BOOLEAN
    },
    has:{
        type: Sequelize.STRING
    },
    salt: {
        type: Sequelize.STRING
    }
},
{
    tableName: 'doctors',
    timestamps: false
});
Doctor.hasOne(DoctorPosition, {foreignKey: 'typeId'});
passportLocalSequelize.attachToUser(Doctor,{
    usernameField: 'login',
    hashField: 'hash',
    saltField: 'salt'
})
Doctor.sync();
module.exports = {
    Doctor
}