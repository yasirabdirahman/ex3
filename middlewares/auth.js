import user from '../models/user.js'
import jwt from 'jsonwebtoken'

export const Protect = async (req,res,next)=>{

    const token = req.headers.authorization?.split(' ')[1]

   if(!token) return res.status(401).json({message:"token not provided."})

    try {

        const decode = jwt.verify(token,process.env.JWT_SECRET)
        req.user = await user.findById(decode.id).select("-password")
        console.log('decoded',decode);
        
        next()
    } catch (error) {
        res.status(401).json({message : "invalid or expired Token"})
    }
    
next()
}