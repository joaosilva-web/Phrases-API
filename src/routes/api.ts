import { Router } from 'express'

import * as ApiController from '../controllers/apiController'

const router = Router()

router.get('/ping', ApiController.ping)
router.get('/random', ApiController.random)
router.get('/nome/:nome', ApiController.nome)


// phrases routes
router.post('/frases', ApiController.createPhrase)
router.get('/frases', ApiController.getPhrases)
router.get('/frase/aleatoria', ApiController.getRandomPhrase)
router.get('/frase/:id', ApiController.getOnePhrase)
router.put('/frase/:id', ApiController.editOnePhrase)
router.delete('/frase/:id', ApiController.deleteOnePhrase)

export default router