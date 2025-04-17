const express =require('express');
const app=express();
let path=require('path');
let a=path.join(__dirname,"public")
app.get("",(_,res)=>{
   res.sendFile(`${a}/index.html`)
})

app.get("/about",(req,res)=>{
res.sendFile(`${a}/about.html`)
})

app.get("/help",(req,res)=>{
    res.sendFile(`${a}/help.html`)
})

app.listen(4000)


// mongodb communtiy server
// mongodb shell