const mongoose = require('mongoose')

const ConnectDB = async() =>{

    try {
        const Db = await mongoose.connect('mongodb+srv://hash1:hash1@cluster0.ghrtxxq.mongodb.net/');
        if(Db){
            console.log("db connected")
        }
    } catch (error) {
        console.error("error is in DB chusko",err.message);
    }
}


module.exports = ConnectDB;
