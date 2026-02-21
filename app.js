const express=require('express');
const app=express();
const morgan=require('morgan');
app.use(morgan("combined"));


app.get("/about",function(req,res,next){
  res.send("heyy");
})
app.get("/profile/:username",function(req,res){
  res.send(req.params.username +'s page');
})

app.get("/about/:username/:age",function(req,res){
  res.send(`something about ${req.params.username} and ${req.params.age}`);
})





app.listen(3000);
