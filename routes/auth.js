import express from 'express'
import { login, register } from '../controllers/auth.js'
import { Protect } from '../middlewares/auth.js'

export const authRouter = express.Router()


authRouter.post('/register',register)
authRouter.post('/login',login)

// protected route 

authRouter.get('/profile',Protect,(req,res)=>{
    console.log('req.user',req.user);
    
    res.json('Protected Route')

})