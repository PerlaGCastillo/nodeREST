import {Router} from 'express'

const router = Router();

router.get('/users', (req, res)=> {
        res.send('obteniendo usuarios')
    })

router.get('/users/:userid', (req, res)=> {
    const {userid} = req.params
    res.send('obteniendo usuario')
    })

router.post('/users/:userid', (req, res)=> {
    const {userid} = req.params
    res.send('creando usuario' + id)
    })

router.delete('/users/:userid', (req, res)=> {
    res.send(id + 'usuario eliminado')
    })

router.put('/users/:userid', (req, res)=> {
    res.send('editando usuario')
    })

export default router