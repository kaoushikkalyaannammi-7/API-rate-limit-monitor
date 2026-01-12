//ill handle register and login logic here
//conceptually responsible for handling user authentication requests
//and hash passwords before storing them in the database
//and generating JWT tokens upon successful login
//and comparing provided passwords with hashed passwords during login

import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

//register controller
export const register=async(req,res)=>{
    try{
        const {email,password}=req.body;
        //check whether user  exists or not
        const userexists=await User.findOne({email});
        if(userexists){
            return res.status(400).json({message:'User already exists'});
        }

        //hash password
        const salt=await bcrypt.genSalt(10);
        const hashedpassword=await bcrypt.hash(password,salt);

        //create new user
        const newuser=await User.create(
            {
                email,
                password:hashedpassword
            }
        );

        res.status(201).json({message:'User registered successfully'});
        
    }catch (error) {
  console.error(" error in register controller:", error);
  return res.status(500).json({ message:error.message });
 }
}


//login controller
export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        //find whether user exists or not
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:'User does not exist'});
        }
        //compare passwords

        const ismatch=await bcrypt.compare(password,user.password);
        if(!ismatch){
            return res.status(400).json({message:'Invalid Password'});
        }

        //generate JWT token
        const token=jwt.sign(
            {
                userId:user._id,
                email:user.email
            },
            process.env.JWT_SECRET,
            {expiresIn:'1d'}
        );
        res.status(200).json({token});
    }catch(error){
        console.error("Error in login controller:",error.message);
        res.status(500).json({message:'Server Error'});
    }
}