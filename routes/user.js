const express=require("express");
const user = require("../models/user");
const userRouter=express.Router();

const User=require("../models/user")
// POST NEW USER

userRouter.post("/add",async(req,res)=>{
    try {
        const newUser = new User(req.body);
        let result=await newUser.save();
        res.send({user:result,msg:"user added"})
    } catch (error) {
        console.log(error);
    }
})


// GET ALL USER
userRouter.get("/",async(req,res)=>{
    try {
        let result=await User.find()
        res.send({users:result,msg:"all users"});
    } catch (error) {
        console.log(error);

    }
})


//GET USER BY ID
userRouter.get("/:id",async(req,res)=>{
    try {
        let result=await User.findById({_id:req.params.id})
        res.send({user:result,msg:"user"});
    } catch (error) {
        console.log(error);

    }
})



//DELETE USER BY ID

userRouter.delete("/:id",async(req,res)=>{
    try {
        let result=await User.findByIdAndDelete({_id:req.params.id})
        res.send({user:result,msg:"user deleted"});
    } catch (error) {
        console.log(error);

    }
})


//UPDATE USER

userRouter.put("/:id",async(req,res)=>{
    try {
        let result=await User.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
        res.send({user:result,msg:"user updated"});
    } catch (error) {
        console.log(error);

    }
})




module.exports=userRouter;