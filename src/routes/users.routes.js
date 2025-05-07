import {Router} from 'express'

const router = Router()

router.get('/users', (req, res) => {
    res.send('obteniendo usuarios')
})

router.get('/users/:userId', (req, res) => {
    const {userId} = req.params
    res.send('obteniendo usuarios')
})



export default router
