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
import {
  addfirststep,
  addsecondstep,
  countSheepClient,
  createShip,
} from '../controllers/userController.js'

//get my ships
router.route('/getmyship').get(clientProtect, getMyShip)

// routes controller by admin
router.route('/createfornisseur').post(protect, admin, registerFornisseur)
router.route('/allfornisseur').get(protect, admin, getAllFornisseur)

//routes
router.route('/loginfornisseur').post(authFornisseur)
router.route('/test').get(clientProtect, testRoute)

//add first step route
router.route('/addstep1client').post(clientProtect, addfirststep)

//add second step route
router.route('/addstep2client').post(clientProtect, addsecondstep)

//add second step route
router.route('/addstep3client').post(clientProtect, createShip)

//get numbers of ships
router.route('/getnumberships').get(clientProtect, countSheepClient)

export default router
