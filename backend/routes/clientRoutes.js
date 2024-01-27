import express from 'express'
const router = express.Router()
import {
  authFornisseur,
  testRoute,
  getMyShip,
} from '../controllers/fornisseurController.js'
import { clientProtect } from '../middelware/clientMiddelware.js'
import {
  addfirststep,
  addsecondstep,
  countSheepClient,
  createShip,
} from '../controllers/userController.js'

import { getShipById } from '../controllers/shipController.js'

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

export default router
