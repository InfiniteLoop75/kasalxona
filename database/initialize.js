const {DB} = require('../database/db');

module.exports = {
    initializeDB: () =>{
        DB
       .authenticate()
       .then(()=>{
           console.log("Ma'lumotlar bazasiga ulandi");
       }).catch((err)=>{
            console.log('Bazaga ulanishda xatolik yuz berdi: ' + err);
       });
    }
}