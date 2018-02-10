const Sequelize = require('sequelize');
const {DB} = require('../database/db');
const {City} = require('./cities');
const District = DB.define('District', {
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
    cityId:{
        type: Sequelize.INTEGER,
        references: {
            model: 'cities',
            key: 'id'
        }
    }
},{
    tableName: 'districts',
    timestamps: false
});
District.hasOne(City, { foreignKey: 'cityId' });
District.sync();

module.exports = {
    District
}