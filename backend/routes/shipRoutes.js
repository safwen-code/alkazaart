import express from 'express'
const router = express.Router()
import {
  createShip,
  getAllShip,
  countSheep,
  getShipById,
} from '../controllers/shipController.js'
import { admin, protect } from '../middelware/authMiddleware.js'

router.route('/createship').post(protect, admin, createShip)
router.route('/allship').get(protect, admin, getAllShip)
router.route('/nbrship').get(protect, admin, countSheep)
router.route('/getship/:id').get(protect, admin, getShipById)

export default router
