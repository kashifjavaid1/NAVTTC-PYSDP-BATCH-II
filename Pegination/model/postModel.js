import mongoose from "mongoose";
const userPost=new mongoose.Schema({
    title:{
       type:String,
       required:true
    },
    description:{
        type:String,
        required:true
    }
})
const Post=mongoose.model("posts",userPost);
export default Post;