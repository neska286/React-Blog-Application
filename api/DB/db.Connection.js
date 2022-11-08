const mongoose = require('mongoose');


const dbConnection = ()=>{

mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log('DataBase connected Succesfully......');
}).catch((err)=>{
    console.log('Data Base not connected..... ');
})
}


module.exports = {
    dbConnection
}