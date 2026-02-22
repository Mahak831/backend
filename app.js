const express=require('express');
const app=express();
const morgan=require('morgan');
app.use(morgan("combined"));
app.set('view engine','ejs');

app.get("/",function(req,res,next){
  res.render("index");
})







app.listen(3000);
