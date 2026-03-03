const mongoose=require("mongoose");
const Joi=require('joi');
const userSchema=mongoose.Schema({
  username:
  {
 type:String,
 minLength:3,
 required:true,
  },
  
  name:{
    type:String,
    minLength:3,
    required:true
  },

  age:{
    type:Number,
    min:18,
    required:true
  },
  contact:{
    type:Number,
    reuired:true
  },
email:{
  type:String,
  required:true
},


})

function validateModel(data){
  let schema=Joi.object({
    username:Joi.string().min(3).required(),
    name:Joi.string().min(3).required(),
    email:Joi.string().email().required(),
    age:Joi.number().min(18).required(),
    contact:Joi.number().required()

  })
  let {error}=schema.validate(data);
return error;
}
let userModel=mongoose.model("user",userSchema);
module.exports={userModel,validateModel};