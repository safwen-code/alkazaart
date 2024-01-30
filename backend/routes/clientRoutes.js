import express from 'express'
const router = express.Router()
import { authFornisseur, getMyShip } from '../controllers/clientController.js'
import { clientProtect } from '../middelware/clientMiddelware.js'
import {
  addfirststep,
  addsecondstep,
  countSheepClient,
  createShip,
} from '../controllers/userController.js'

import {
  getShipById,
  updateCurrentShip,
} from '../controllers/shipController.js'

//Login client
router.route('/loginfornisseur').post(authFornisseur)
// router.route('/test').get(clientProtect, testRoute)

//add traitement
//add first step route
router.route('/addstep1client').post(clientProtect, addfirststep)

//add second step route
router.route('/addstep2client').post(clientProtect, addsecondstep)

//add second step route
router.route('/addstep3client').post(clientProtect, createShip)

//get numbers of ships
router.route('/getnumberships').get(clientProtect, countSheepClient)

//get My lists ships
router.route('/getmyship').get(clientProtect, getMyShip)

//get ship by id
router.route('/shipbyid/:id').get(clientProtect, getShipById)

//update  my ships
router.route('/updatecurrentship').post(clientProtect, updateCurrentShip)

export default router
