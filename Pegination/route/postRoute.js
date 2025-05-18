import express from "express";
import  {createPost, f1 } from "../controller/postController.js";

const postRoute=express.Router();
postRoute.post("/createPost",createPost);
// postRoute.get("/getPost",getPost);
postRoute.get("/pegination",f1);
export default postRoute;