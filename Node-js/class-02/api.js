let express=require("express");
require("./config");
let User=require("./user");
let app=express();
app.use(express.json());
app.post("/create",async(req,res)=>{
    let data=new User(req.body);
    let result=await data.save();
    console.log(result);
    res.send("the data has inserted")
});

app.get("/get",async(req,res)=>{
   let result=await User.find();
   console.log(result);
   res.send("User",result)
   
})
app.delete("/delete/:_id",async(req,res)=>{
    let result=await User.deleteOne(req.params);
   console.log(result);
})

app.put("/update/:_id",async(req,res)=>{
//     let updateUser=req.body;
//     let _id=req.params._id;
//    let result=await User.updateOne({_id},{...updateUser});
let result=await User.updateOne(req.params,req.body);

   console.log(result);
   res.send("update",result)

})
app.listen(5000)