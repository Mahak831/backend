const express=require('express');
const app=express();
const mongoose=require("mongoose");
const mongooseconnection=require("./config/mongoose");
const {userModel,validateModel}=require("./models/user");
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


// app.get("/users/:username",async function(req,res,next){
//   let {name,email,username}=req.body;
//   let user=await userModel.findOneAndDelete({username:req.params.username});
//   res.send(user);
//  })
// app.get("/",function(req,res){
//   res.send("helloooo");
// })
// const dummydata = [
//   {
//     username: "mahak01",
//     name: "Mahak Rajput",
//     password: "mahak@123",
//     age: "21",
//     isMarried: false,
//     email: "mahak01@gmail.com"
//   },
//   {
//     username: "riya02",
//     name: "Riya Sharma",
//     password: "riya@123",
//     age: "24",
//     isMarried: false,
//     email: "riya02@gmail.com"
//   },
//   {
//     username: "arjun03",
//     name: "Arjun Verma",
//     password: "arjun@321",
//     age: "28",
//     isMarried: true,
//     email: "arjun03@gmail.com"
//   },
//   {
//     username: "sneha04",
//     name: "Sneha Kapoor",
//     password: "sneha@111",
//     age: "26",
//     isMarried: false,
//     email: "sneha04@gmail.com"
//   },
//   {
//     username: "rohit05",
//     name: "Rohit Mehta",
//     password: "rohit@555",
//     age: "30",
//     isMarried: true,
//     email: "rohit05@gmail.com"
//   },
//   {
//     username: "ananya06",
//     name: "Ananya Singh",
//     password: "ananya@222",
//     age: "22",
//     isMarried: false,
//     email: "ananya06@gmail.com"
//   },
//   {
//     username: "vikas07",
//     name: "Vikas Yadav",
//     password: "vikas@777",
//     age: "27",
//     isMarried: false,
//     email: "vikas07@gmail.com"
//   },
//   {
//     username: "pooja08",
//     name: "Pooja Mishra",
//     password: "pooja@888",
//     age: "25",
//     isMarried: false,
//     email: "pooja08@gmail.com"
//   },
//   {
//     username: "rahul09",
//     name: "Rahul Jain",
//     password: "rahul@999",
//     age: "29",
//     isMarried: true,
//     email: "rahul09@gmail.com"
//   },
//   {
//     username: "neha10",
//     name: "Neha Gupta",
//     password: "neha@000",
//     age: "23",
//     isMarried: false,
//     email: "neha10@gmail.com"
//   },
//   {
//     username: "amit11",
//     name: "Amit Tiwari",
//     password: "amit@111",
//     age: "31",
//     isMarried: true,
//     email: "amit11@gmail.com"
//   },
//   {
//     username: "kavya12",
//     name: "Kavya Reddy",
//     password: "kavya@222",
//     age: "22",
//     isMarried: false,
//     email: "kavya12@gmail.com"
//   },
//   {
//     username: "deepak13",
//     name: "Deepak Chauhan",
//     password: "deepak@333",
//     age: "33",
//     isMarried: true,
//     email: "deepak13@gmail.com"
//   },
//   {
//     username: "shruti14",
//     name: "Shruti Malhotra",
//     password: "shruti@444",
//     age: "24",
//     isMarried: false,
//     email: "shruti14@gmail.com"
//   },
//   {
//     username: "harsh15",
//     name: "Harsh Patel",
//     password: "harsh@555",
//     age: "27",
//     isMarried: false,
//     email: "harsh15@gmail.com"
//   }
// ];

// app.get("/createmany",async (req,res)=>{
// let data= await userModel.insertMany(dummydata);
// res.send(data);
// })
// app.get("/users",async(req,res)=>{
//   let users=await userModel.find({age:{$lt:24}});
//   res.send(users);
// })

app.post("/create", async function(req,res){
   let{name,username,age,contact,email}=req.body;
  let error=validateModel({name,username,age,contact,email})
  if(error){
    res.send(error.message)
  }
  else{
    let user=await userModel.create({name,username,age,contact,email});
    res.send(user);
  }
})



app.listen(3000);

