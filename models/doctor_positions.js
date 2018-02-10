const Sequelize = require('sequelize');
const {DB} = require('../database/db');
const DoctorPosition = DB.define('DoctorPositions', {
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
    }
},{
    tableName: 'doc_pos',
    timestamps: false
});
DoctorPosition.sync();
module.exports = {
    DoctorPosition
}