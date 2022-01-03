const mongoose=require("mongoose");


const Schema =mongoose.Schema;
const userSchema = new Schema({
    name:String,
    email:{type:String, unique:true},
    isAdmin:{type:Boolean, default:false}
  });





  const User = mongoose.model('User', userSchema);7

  module.exports=(User);
