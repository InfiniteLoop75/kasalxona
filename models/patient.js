const sequelize = require('sequelize');
const Patient = sequelize.define('patient',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: sequelize.STRING
    },
    age: {
        type: sequelize.INTEGER
    }
});

module.exports = {
    Patient
}