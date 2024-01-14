import express from 'express'
const router = express.Router()
import {
  registerFornisseur,
  getAllFornisseur,
  authFornisseur,
  testRoute,
  getMyShip,
} from '../controllers/fornisseurController.js'
import { admin, protect } from '../middelware/authMiddleware.js'
import { clientProtect } from '../middelware/clientMiddelware.js'

//get my ships
router.route('/getmyship').get(clientProtect, getMyShip)

// routes controller by admin
router.route('/createfornisseur').post(protect, admin, registerFornisseur)
router.route('/allfornisseur').get(protect, admin, getAllFornisseur)

//routes
router.route('/loginfornisseur').post(authFornisseur)
router.route('/test').get(clientProtect, testRoute)

export default router
