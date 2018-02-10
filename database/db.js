const {Sequelize} = require('sequelize');

var DB = new Sequelize({
    port: 3306,
    database: 'kasalxona',
    username: 'root',
    password: 'android6699',
    dialect: 'mysql'
});
DB
       .authenticate()
       .then(()=>{
           console.log("Ma'lumotlar bazasiga ulandi");
       }).catch((err)=>{
            console.log('Bazaga ulanishda xatolik yuz berdi: ' + err);
       });

module.exports ={
    DB
};
