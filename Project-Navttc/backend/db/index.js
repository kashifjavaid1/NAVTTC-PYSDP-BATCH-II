let express=require("express");
const cors=require("cors")
require('./config')
let User=require("./user");
let app=express();
app.use(cors())
app.use(express.json());

app.post("/sign",async(req,res)=>{
    const user=new User(req.body);
    const result=user.save();
    res.send("user add sucessfull",result)
})



app.listen(5000)