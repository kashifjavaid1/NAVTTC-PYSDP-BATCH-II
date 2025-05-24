import express from "express"
import { courseCreate, updateCourse } from "../controllers/course.controller.js";
const router=express.Router();
router.post("/create",courseCreate);
router.patch("/update/:courseId",updateCourse

);
export default router;