import User from "../models/User.js";
import bcrypt from 'bcryptjs'

export const signUser = async (req, res)=>{
    try {
        const { name, email, password } = req.body;
    } catch (error) {
       res.status(500).json({message: "Server error", error}) 
    }
}