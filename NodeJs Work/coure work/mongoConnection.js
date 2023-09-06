const mongoose = require('mongoose');

const dbconnect = async () => {
  try{
    await mongoose
      .connect((String)(process.env.MONGO_DB_URI));
      console.log('Mongo Connection Successful...');
  }catch(err){
    console.log(`DataBase Connection Error ${err}`)
  }
}

module.exports = dbconnect;
