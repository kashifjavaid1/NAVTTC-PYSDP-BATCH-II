import { v2 as cloudinary } from 'cloudinary'
import Course from '../models/course.model.js'
export const courseCreate=async(req,res)=>{
   const {title,description,price}=req.body;
   if (!title || !description || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }
   const image=req.files.image;
   if (!image || !req.files.image) {
    return res.status(400).json({ error: "Image file is required" });
   }
   const allowrdformat=['image/png', 'image/jpeg'];
   if (!allowrdformat.includes(image.mimetype)) {
    return res.status(400).json({ error: 'Only JPG and PNG formats are allowed' });
   }
   const uploadResult = await cloudinary.uploader.upload(image.tempFilePath);
    if (!uploadResult) {
      return res.status(500).json({ message: "Image upload failed" });
    }
    const createCourse = new Course({
      title,
      description,
      price,
      image: {
        public_id: uploadResult.public_id,
        url: uploadResult.secure_url
      }
    });

    await createCourse.save();

    res.status(201).json({ message: "Course created successfully",courseCreate });
}


//  Update Course and image

export const updateCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, description, price } = req.body;
    const course=await Course.findById(courseId);
    if (!course) {
      res.status(400).json({message:"course not found"})
    }
    course.title=title||course.title;
    course.description=description||course.description;
    course.price=price||course.price;
      if (req.files && req.files.image) {
         const image = req.files.image;
         await cloudinary.uploader.destroy(course.image.public_id);
         const uploadResult = await cloudinary.uploader.upload(image.tempFilePath);
course.image = {
  public_id: uploadResult.public_id,
  url: uploadResult.secure_url
};
      }
       await course.save();
       res.status(200).json({ message: "Course updated successfully", course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in updating course", error: error.message });
  }
};

// delete Course
export const deleteCourse=async(req,res)=>{
try {
  const {courseId}=req.params;
 const course=await Course.findById(courseId);
 if (!course) {
   res.status(400).json({messgae:"course not found"})
 }
 if (course.image && course.image.public_id) {
      await cloudinary.uploader.destroy(course.image.public_id);
    }
   await Course.findByIdAndDelete(courseId);
  res.status(200).json({message:"course successfully deleted"})
} catch (error) {
  res.status(500).json({message:"course not deleted"})
}
}