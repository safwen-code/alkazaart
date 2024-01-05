import express from 'express'
const router = express.Router()
import {
  registerFornisseur,
  getAllFornisseur,
  authFornisseur,
  testRoute,
} from '../controllers/fornisseurController.js'
import { admin, protect } from '../middelware/authMiddleware.js'
import { fornisseurProtect } from '../middelware/fornisseurMiddelware.js'

// routes controller by admin
router.route('/createfornisseur').post(protect, admin, registerFornisseur)
router.route('/allfornisseur').get(protect, admin, getAllFornisseur)

//routes
router.route('/loginfornisseur').post(authFornisseur)
router.route('/test').get(fornisseurProtect, testRoute)
export default router
