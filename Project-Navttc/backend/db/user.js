let mongoose=require("mongoose")
let userSchema=new mongoose.Schema({
    fullName:String,
    email:String,
    password:String
},
{
    timestamps:true,
    versionKey:false
});
module.exports=mongoose.model("users",userSchema);
