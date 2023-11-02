const express=require("express");
const app=express();
app.use(express.static("."));
const Users=require("./models/userModels")
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/UsersData").then(result=>{
    console.log("Database Connected..");
}).catch(err=>{
    console.log("Issue in Connecting..",err)
})

app.get("/saveData",(req,res)=>{
    let obj={}
    obj.email="abhigupta7764@gmail.com";
    obj.password="ABhishek";
    obj.name="Abhi Gupta"

    const userObj=new Users(obj);
    
    userObj.save().then(result=>{
        console.log(result);
        res.send();
    })
})
app.listen(3000,(err)=>{
    console.log("Servered Started....");
})