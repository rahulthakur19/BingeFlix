const mongoose= require('mongoose')
 const userSchema= new mongoose.Schema({
    username : {type:String ,required : true, unique :true},
    email : {type : String ,required : true,unique :true},
    password : { type :String,default :""},
    profilePic :{type :String ,default : false},
    isAdmin :{ typr : Boolean,default :false},
 },
 {timestamps : true});
 module.exports = mongoose.model("User",userSchema);