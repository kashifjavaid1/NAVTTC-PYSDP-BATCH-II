import Post from "../model/postModel.js";

 const createPost=async(req,res)=>{
 try {
      const create=new Post(req.body);
   await create.save();
   res.send("post sucessfull created")
 } catch (error) {
    res.send(error)
 }
    
}

// const getPost = async (req, res) => {
//   try {
//     const data = await Post.find();
//     res.send(data); 
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// const f1=async(req,res)=>{
//     try {
//         const page=parseInt(req.query.p)||1;
//         const parPage=3;
// const total=await Post.countDocuments();
// Math.ceil(total/parPage);
// if (page>parPage) {
//     res.send({message:"page not found"})
// }
// const post =await Post.find()
// .skip((page-1)*parPage).limit(parPage).exec();
// res.send({
//     post,
//     page,
//     parPage

// })

//     } catch (error) {
//        res.send(error) 
//     }
// }

const f1=async(req,res)=>{
  const page=parseInt(req.query.p)||1;
  const parPage=3;
  const totalPost=await Post.countDocuments();
  Math.ceil(totalPost/parPage);
  if (page>parPage) {
    res.send({message:"page not found"})
}
const post=await Post.find().skip((page-1)*parPage)
}
export { createPost,f1 };
