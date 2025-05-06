let express=require("express");
const cors=require("cors")
require('./config')
let User=require("./user");
let Product=require("./product");
let app=express();
app.use(cors())
app.use(express.json());

app.post("/sign",async(req,res)=>{
    const user=new User(req.body);
    const result=user.save();
    res.send("user add sucessfull",result)
})


app.post("/product",async(req,res)=>{
    const product=new Product(req.body);
    const result=product.save();
    res.send("product add sucessfull",result)
})
app.get("/getproduct",async(req,res)=>{
    const products = await Product.find();
        if (products.length > 0) {
            res.status(200).json({ message: "Products fetched successfully", products });
        } else {
            res.status(404).json({ message: "No products found" });
        }

})

app.get("/getproduct:id",async(req,res)=>{
    const productId = req.params.id;
    const product = await Product.findOne({ _id: productId });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
})



app.listen(5000);