import Ship from '../models/shipModel.js'
import asyncHandler from 'express-async-handler'
import Fornisseur from '../models/fornisseurModel.js'

//add sheep
const createShip = asyncHandler(async (req, res) => {
  // console.log(req.user)

  //get fornisseur by his Id
  const id = req.body.id
  const fornisseurdata = await Fornisseur.findById({ _id: id })
  let { name, email, createdAt } = fornisseurdata

  //create product
  const ship = new Ship({
    fornisseur: id,
    fornisseurname: name,
    fornisseuremail: email,
    fournisseurcreated: createdAt,
    firststep: req.body.firststep,
    secondstep: req.body.secondstep,
    thirdstep: req.body.thirdstep,
    createdby: req.user.name,
  })

  const createdShip = await ship.save()
  res.status(201).json(createdShip)
})

//get allShip
//to do
const getAllShip = asyncHandler(async (req, res) => {
  const ships = await Ship.find({})
  if (ships) {
    res.status(201)
    res.json({ ships })
  } else {
    res.status(401)
    throw new Error('no shippment declared')
  }
})

//get nbr sheep
//nbr sheep firststep
//nbr sheep secondstep
//nbr sheep thirdstep
const countSheep = asyncHandler(async (req, res) => {
  const ships = await Ship.aggregate([
    {
      $group: {
        _id: null,
        totalShips: { $sum: 1 },
        totalFirstStep: {
          $sum: {
            $cond: { if: { $ifNull: ['$firststep', false] }, then: 1, else: 0 },
          },
        },
        totalSecondStep: {
          $sum: {
            $cond: {
              if: { $ifNull: ['$secondstep', false] },
              then: 1,
              else: 0,
            },
          },
        },
        totalThirdStep: {
          $sum: {
            $cond: { if: { $ifNull: ['$thirdstep', false] }, then: 1, else: 0 },
          },
        },
      },
    },
  ])

  if (ships && ships.length > 0) {
    res.status(201).json(ships[0])
  } else {
    res.status(401)
    throw new Error('No shipment declared')
  }
})

//get ship by id
const getShipById = asyncHandler(async (req, res) => {
  try {
    const idship = req.params.id
    const ship = await Ship.findById({ _id: idship })
    if (ship) {
      res.status(200).json(ship)
    }
  } catch (error) {
    throw new Error(error)
  }
})

//add the first step
const addfirststep = asyncHandler(async (req, res) => {
  //get fornisseur by his Id
  const id = req.body.id
  const fornisseurdata = await Fornisseur.findById({ _id: id })
  let { name, email, createdAt } = fornisseurdata

  let { firststep } = req.body.firststep

  //create product
  const ship = new Ship({
    fornisseur: id,
    fornisseurname: name,
    fornisseuremail: email,
    fournisseurcreated: createdAt,
    firststep,
  })

  // console.log(ship)
  const createdShip = await ship.save()
  res.status(201).json(createdShip)
})

//add the Second step
const addsecondstep = asyncHandler(async (req, res) => {
  //get fornisseur by his Id
  const id = req.body.id
  const fornisseurdata = await Fornisseur.findById({ _id: id })
  let { name, email, createdAt } = fornisseurdata

  let { firststep } = req.body.firststep
  let { secondstep } = req.body.secondstep
  //create product
  const ship = new Ship({
    fornisseur: id,
    fornisseurname: name,
    fornisseuremail: email,
    fournisseurcreated: createdAt,
    firststep,
    secondstep,
  })

  // console.log(ship)
  const createdShip = await ship.save()
  res.status(201).json(createdShip)
})

export {
  createShip,
  getAllShip,
  countSheep,
  getShipById,
  addfirststep,
  addsecondstep,
}
