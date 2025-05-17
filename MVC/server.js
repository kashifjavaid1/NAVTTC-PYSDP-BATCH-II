import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./model/userRoute.js";
const app=express();
app.use(bodyParser.json());

  const port = 5000;
const mongoURI = "mongodb://127.0.0.1:27017/users";

mongoose.connect(mongoURI).then(()=>{
    console.log("database is runing");
    
});
app.use('/api/user',userRoute)
app.listen(port, () => {
  console.log("Server is running on port");
});