const express =require("express");
const app= express();
const mongoose =require("mongoose");
app.use(express.json())
// const cors= require ("cors");


const mongoUrl = "mongodb+srv://kemboy:wEQGanIinjD2oOC3@cluster0.st7vikr.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {
    useNewUrlParser:true,
}).then(()=>{console.log("connected to database")})
.catch((e)=>console.log(e));

app.listen(5000,()=>{
    console.log("server started");
});

app.post("/post", async (req,res)=>{
    console.log(req.body);
    const {data}=req.body;

    try {
        if (data=="correctData"){
            res.send({status:"ok"});
         }
         else{
            res.send({status:"incorrect details"});
         }
        
    } catch (error) {
        res.send({status:"something went wrong"});
    }

 
});
require ("./userDetail");

const User = mongoose.model("userInfo");

app.post("/register", async(req,res)=>{
    const {fname,lname,email,password}=req.body;
    try {
       await User.create({
        fname,
        lname,
        email,
        password,
        

       });
       res.send({status:"ok"});
    } catch (error) {
        res.send({status:"error"});
        
    }
});