import User from "../models/User.js";

export const createUser =async (req,res)=>{
try{
const {name,email,message}=req.body;
const user =await User.create({name,email,message});

return res.status(201).json({
    success:true,
    message:"User created successfully",
    data: user,
});
}catch(error){
    res.status(500).json({
        success:false, 
        message:"Error saving the user",
    error:error.message,});     

}
};

