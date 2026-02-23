const express=require('express');
const app=express();
const morgan=require('morgan');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.render("index");
}); 
app.get("/check",function(req,res){
  console.log(req.query);
  res.send("workingggg");
})







app.listen(3000);
