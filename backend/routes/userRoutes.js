import express from 'express'
const router = express.Router()
import { authUser, registerUser } from '../controllers/userController.js'
import { admin, protect } from '../middelware/authMiddleware.js'

import {
  getAllFornisseur,
  registerFornisseur,
} from '../controllers/userController.js'
import { getShipById } from '../controllers/shipController.js'

//login and register
router.post('/login', authUser)
router.post('/register', registerUser)

// Create Client
router.route('/createfornisseur').post(protect, admin, registerFornisseur)

//get all Client
router.route('/allfornisseur').get(protect, admin, getAllFornisseur)

//get ships by id
//client by id
//private
router.route('/getship/:id').get(protect, admin, getShipById)

export default router
