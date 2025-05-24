import express from "express"
import { courseCreate, deleteCourse, updateCourse } from "../controllers/course.controller.js";
const router=express.Router();
router.post("/createCourse",courseCreate);
router.patch("/update/:courseId",updateCourse);
router.delete("/delete/:courseId",deleteCourse);
export default router;