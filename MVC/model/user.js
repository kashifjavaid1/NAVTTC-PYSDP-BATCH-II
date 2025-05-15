import mongoose from "mongoose";
const userScheme=new mongoose.Schema({
    name:String,
    email:String
});
const User=mongoose.model("user",userScheme);
export default User;