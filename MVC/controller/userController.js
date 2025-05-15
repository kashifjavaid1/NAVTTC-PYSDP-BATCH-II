import User from "../model/user.js";
export const createUser=async(req,res)=>{
    try {
        const data= new User(req.body);
        const result=await data.save()
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}