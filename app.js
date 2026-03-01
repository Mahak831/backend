const express=require('express');
const app=express();
const mongoose=require("mongoose");
const mongooseconnection=require("./config/mongoose");
const userModel=require("./models/user");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.send("Hello World");
})
// app.get("/update", async function(req,res){
// let user= await userModel.findOneAndUpdate({name:"keshav"},{name:"ram"},{returnDocument: "after"});
// res.send(user);

// })

// app.get("/delete",async function(req,res){
//   let user=await userModel.findOneAndDelete({name:"ram"});
//   console.log(user);
// })
// app.post("/create",async function(req,res,next){
// let {name,username,email,password}=req.body;
// let user= await userModel.create(
//   {
//     name,
//     username,
//     email,
//     password
//   }
// )
// res.send(user);

// })

// app.get("/users",async function(req,res,next){
//   let users=await userModel.find();
//   res.send(users);
// })
// app.get("/users/:username",async function(req,res,next){
//   let user=await userModel.findOne({username:req.params.username});
//   res.send(user);
// })
// app.get("/users/:username",async function(req,res,next){
//   let {name,email,username}=req.body;
//   let user=await userModel.findOneAndUpdate({username:req.params.username},{name,email,username},{returnDocument:"after"});
//   res.send(user);
//  })


app.get("/users/:username",async function(req,res,next){
  let {name,email,username}=req.body;
  let user=await userModel.findOneAndDelete({username:req.params.username});
  res.send(user);
 })


app.listen(3000);

