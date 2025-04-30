let mongoose=require("mongoose")
let productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    userId:Number,
    company:String
},
{
    timestamps:true,
    versionKey:false
});
module.exports=mongoose.model("products",productSchema);
