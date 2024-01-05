import express from 'express'
const router = express.Router()
import {
  createShip,
  getAllShip,
  countSheep,
} from '../controllers/shipController.js'
import { admin, protect } from '../middelware/authMiddleware.js'

router.route('/createship/:idfornisseur').post(protect, admin, createShip)
router.route('/allship').get(protect, admin, getAllShip)
router.route('/nbrship').get(protect, admin, countSheep)

export default router
