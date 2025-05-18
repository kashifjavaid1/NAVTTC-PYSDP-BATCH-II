import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postRoute from "./route/postRoute.js";
const app=express();
app.use(bodyParser.json());
const port = 5000;
const mongoURI = "mongodb://127.0.0.1:27017/pegination";
mongoose.connect(mongoURI).then(()=>{
    console.log("connect the database");
    
});
app.use('/api',postRoute,)
app.listen(port,()=>{
    console.log("server is connect");
    
})
