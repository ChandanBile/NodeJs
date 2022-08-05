import { Router } from "express";

const router = Router()

router.post('/',(req, res) => {
    const {username, password} = req.body
    console.log(username, password)
    try {
        res.status(200).send({Message: "Login Success"})
    } catch (error) {
        console.log(error)
    }
})
export default router    // default will directly export given argument by default