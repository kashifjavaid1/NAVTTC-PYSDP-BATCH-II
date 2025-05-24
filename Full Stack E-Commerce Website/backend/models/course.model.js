import mongoose from "mongoose";

const courseScheme=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
      public_id:{
         type:String,
         required:true
       },
       url:{
        type:String,
        required:true
       }
    }
})
const Course=mongoose.model("courses",courseScheme);
export default Course;
