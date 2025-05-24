import express from 'express' 
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import createRoute from './routes/course.route.js'
import { v2 as cloudinary } from 'cloudinary';
import fileUpload from 'express-fileupload';
dotenv.config();

const app = express()
// middleware
app.use(express.json());

const port = process.env.PORT ||3000
const DB_URL=process.env.MONGODB_URL

try {
 await mongoose.connect(DB_URL);
 console.log("connect the mongodb");
 
} catch (error) {
  console.log(error);
  
}
// Configuration cloudinary
// cloudinary.config({ 
//   cloud_name:process.env.CLOUD_NAME, 
//   api_key:process.env.API_KEY, 
//   api_secret:process.env.API_SECRET
// });

cloudinary.config({ 
        cloud_name: 'dk48g8htz', 
        api_key: '777828417773792', 
        api_secret: 'I2aTM5wGR8DIePi_gniiH0NU17A' // Click 'View API Keys' above to copy your API secret
    });
// File Handling middleware code
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));


// main routes define
app.use("/api",createRoute)
app.get('/', (req, res) => {
  res.send('Hi! My Name is Kashif')
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
