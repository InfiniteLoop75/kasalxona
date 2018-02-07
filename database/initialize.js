const {DB} = require('../database/db');

module.exports = {
    initializeDB: () =>{
        DB
       .authenticate()
       .then(()=>{
           console.log("Bazaga ulandi");
       }).catch((err)=>{
            console.log('Bazaga ulanishda xatolik yuz berdi: ' + err);
       });
    }
}