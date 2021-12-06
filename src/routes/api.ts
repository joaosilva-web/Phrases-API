import { Router } from 'express'

import * as ApiController from '../controllers/apiController'

const router = Router()

router.get('/ping', ApiController.ping)
router.get('/random', ApiController.random)
router.get('/nome/:nome', ApiController.nome)


// phrases routes
router.post('/frases', ApiController.createPhrase)
router.get('/frases', ApiController.getPhrases)
router.get('/frase/:id', ApiController.getOnePhrase)

export default router