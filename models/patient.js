const Sequelize = require('sequelize');
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
    age: {
        type: Sequelize.INTEGER
        
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        default: 'No email'
        
    }
},
{
    tableName: 'patients',
    timestamps: false
});
Patient.sync({force: false});
module.exports = {
    Patient
}