import Router from 'express'


const router = Router()

router.post('/', (req,res) => {
    try {
        res.status(200).send({message: 'Homepage'})
    } catch (error) {
        throw error
    }
    
})

export default router