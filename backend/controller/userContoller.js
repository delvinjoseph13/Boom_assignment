import userModel from "../model/userModule.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const userRegister=async(req,res)=>{
    const {email,password}=req.body
    try {
        //checking if user already exists
        const user=await userModel.findOne({email})

        if(user){
            return res.status(400).json({message:"User Already Exits"})
        }
        //hashing password
        const hashPassword=bcrypt.hashSync(password,10)
        //creating new User
        const newUser=await userModel.create({
            email,
            password:hashPassword
        })
        res.status(201).json({message:"User Created Successfully"})
        
        
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}


export const userLogin=async(req,res)=>{
    const {email,password}=req.body
    try {

        //checking if user exists
        const user=await userModel.findOne({email});
        if(!user){
            return res.status(400).json({message:"User Not Found"})
        }
        //comparing password
        const isMatch=bcrypt.compareSync(password,user.password);
        //generting jwt joken
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: "24h" });
        if(!isMatch){
            return res.status(400).json({message:"Invalid Password"})
        }
        res.status(201).json({
            message:"User Login Successfully",
            user:user,
            token:token
        })

    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}