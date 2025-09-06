const mongoose = require("mongoose");


async function connectDB(){
try{
   await mongoose.connect(process.env.MONGO_URI).then(()=>{
      console.log('connected to data base');
    })
    
    }
  catch(err){
      console.log(err);}
}


module.exports = connectDB;
