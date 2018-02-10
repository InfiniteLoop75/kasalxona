const Sequelize = require('sequelize');
const {DB} = require('../database/db');
const {District} = require('./districts');
const Address = DB.define('Address', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    house:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "No Name"
    },
    street:{
        type: Sequelize.STRING,
        allowNull: true
    },
    districtId:{
        type: Sequelize.INTEGER,
        references: {
            model: 'districts',
            key: 'id'
        }
    }
},{
    tableName: 'addresses',
    timestamps: false
});
Address.hasOne(District, { foreignKey: 'districtId' });
Address.sync();

module.exports = {
    Address
}


