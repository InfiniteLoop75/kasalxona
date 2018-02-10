const Sequelize = require('sequelize');
const {DB} = require('../database/db');
const {Region} = require('./regions');
const City = DB.define('City', {
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
    regionId:{
        type: Sequelize.INTEGER,
        references: {
            model: 'regions',
            key: 'id'
        }
    }
},{
    tableName: 'cities',
    timestamps: false
});
City.hasOne(Region, { foreignKey: 'regionId' });
City.sync();

module.exports = {
    City
}