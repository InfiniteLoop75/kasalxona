const Sequelize = require('sequelize');
const {DB} = require('../database/db');
const Region = DB.define('Region', {
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
    tableName: 'regions',
    timestamps: false
});
Region.sync();
module.exports = {
    Region
}