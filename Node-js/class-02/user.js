let mongoose= require ('mongoose');
let userSchema=new mongoose.Schema({
      fname:String,
      lname:String,
      age:Number
},
{
    timestamps:true,
    versionKey:false
}
);
module.exports=mongoose.model("students",userSchema);