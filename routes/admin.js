import express from 'express'

import { Protect } from '../middlewares/auth.js'
import { authorize } from '../middlewares/authorize.js'

export const adminRouter = express.Router()

adminRouter.get('/dashboard',Protect,authorize('admin'),(req,res)=>{
    res.json({message : `welcome to admin dashboard ${req.user.name}`})

})