import express from 'express'
const router = express.Router()
import {
  registerUtilsateur,
  allutilisateur,
} from '../controllers/utilisateurControler.js'

import { admin, protect } from '../middelware/authMiddleware.js'

router.route('/createutil').post(protect, registerUtilsateur)
router.route('/allutilisateur').get(protect, allutilisateur)

export default router
