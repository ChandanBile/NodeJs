import { Router } from "express";
import User from '../models/User.js'

const router = Router()

router.post('/',async (req, res) => {
    const {username, password, email} = req.body
    // console.log(username, password)
    
    const user = await User.findOne(username)
    console.log(user)
    
    try {
        if (!user){
            const userData = new User({username: username, password: password, email: email})
            userData.save()
            res.status(201).send({Message: "New user created"})
            
        }else{
            res.status(200).send({Message: "User exists"})
    
        }
    } catch (error) {
        console.log(error)
    }
})
export default router 