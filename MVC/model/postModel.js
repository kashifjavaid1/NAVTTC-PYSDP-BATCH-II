import mongoose, { Types } from "mongoose";

const userPost=new mongoose.Schema({ 
   title: { 
    type: String,
     required: true 
    },
  content: { 
    type: String,
     required: true
     },
  like: { 
    type: Number,
     default: 0 },
  deslike: { 
    type: Number, 
    default: 0
 },
  likeby: [{ 
    type: Types.ObjectId,
     ref: "User" 
    }],
  dislikeby: [{ 
    type: Types.ObjectId,
     ref: "User" 
    }]
})