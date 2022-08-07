const express =require('express')
const app = require('express')()
const mongoose = require('mongoose')
const dotenv =require('dotenv')
const authRoute = require('./routes/auth')
dotenv.config()
mongoose.connect(process.env.MONGO,{
    useNewUrlParser:true,
    useUnifiedTopology : true,
}).then(()=>console.log("Db connection Succesful")).catch((err)=>console.log(err))
app.use(express.json());
app.use("/api/auth",authRoute);
app.listen(3000,()=>{
    console.log("App is running");
})