const express  = require("express");
const app = express();
const Port =  3000;

app.get("/",function(req,res){
    res.send("Hello");
})

app.listen(Port,function (req,res) {
    console.log("Server is running here..")
  })