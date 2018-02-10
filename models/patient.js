const Sequelize = require('sequelize');
const {Address} = require('./address');
const {DB} = require('../database/db');
// const {initializeDB} = require('../database/initialize');
//initializeDB();
const Patient = DB.define('Patient',{
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
    date_of_birth: {
        type: Sequelize.DATE,
        allowNull: false,
        default: Sequelize.NOW
        
    },
    addressId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'addresses',
            key: 'id'
        }
    },
    phone:{
        type: Sequelize.STRING,
        unique: true,
    },
    passportNum:{
        type: Sequelize.STRING,
        unique: true
    },
    regdate:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
},
{
    tableName: 'patients',
    timestamps: false
});
Patient.hasOne(Address, {foreignKey: 'addressId'});
Patient.sync();
module.exports = {
    Patient
}