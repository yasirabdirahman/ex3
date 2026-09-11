import user from '../models/user.js'
import { generateToken } from "../utils/generateToken.js";



export const register = async (req,res,next)=>{

    let {name,email,password,role} = req.body

    try {

        email = email.toLowerCase();

        const exist = await user.findOne({email})

        if(exist) return res.status(400).json({message:"email already in use"})

            const newUser = await user.create({name,email,password,role})

            const token = generateToken(newUser._id)

            res.status(201).json({token})
            console.log(token);
            
        
    } catch (error) {
        console.log("User not created" , error);    
    }

}


export const login = async (req,res,next)=>{

    let {email,password } = req.body
    try {

        email = email.tolowerCase()

        const user = await user.findOne({email})

        if(!user || !(await user.comparePassword(password))){

            return res.status(401).json({message : "invalid email or password"})

        }
        const token = generateToken(token._id)

        res.json({token})
    } catch (error) {
        
    }

}