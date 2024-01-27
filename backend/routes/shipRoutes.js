//this step controlled by the admin
//private with jwt

import express from 'express'
const router = express.Router()
import {
  createShip,
  getAllShip,
  countSheep,
  getShipById,
  addfirststep,
  addsecondstep,
  updateCurrentShip,
} from '../controllers/shipController.js'
import { admin, protect } from '../middelware/authMiddleware.js'

router.route('/createship').post(protect, admin, createShip)
router.route('/allship').get(protect, admin, getAllShip)
router.route('/nbrship').get(protect, admin, countSheep)

router.route('/addfirststep').post(protect, admin, addfirststep)
router.route('/addsecondstep').post(protect, admin, addsecondstep)
router.route('/updatecurrentship').post(protect, admin, updateCurrentShip)

export default router
