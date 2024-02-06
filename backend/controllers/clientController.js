import Fornisseur from '../models/fornisseurModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import Ship from '../models/shipModel.js'

//auth Fornisseur
const authFornisseur = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const fornisseur = await Fornisseur.findOne({ email })
  if (fornisseur && (await fornisseur.matchPassword(password))) {
    res.json({
      _id: fornisseur._id,
      name: fornisseur.name,
      email: fornisseur.email,
      token: generateToken(fornisseur._id),
    })
  } else {
    res.status(401)
    throw new Error('invalid email or passord')
  }
})

//register fornisseur
const registerFornisseur = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const fornisseurExist = await Fornisseur.findOne({ email })
  if (fornisseurExist) {
    res.status(400)
    throw new Error('fornisseur exist')
  }
  const fornisseur = await Fornisseur.create({
    name,
    email,
    password,
  })
  if (fornisseur) {
    res.status(201).json({
      _id: fornisseur._id,
      name: fornisseur.name,
      email: fornisseur.email,
      password: fornisseur.password,
      token: generateToken(fornisseur._id),
    })
  } else {
    res.status(400)
    throw new Error('fornisseur exist')
  }
})

//test data
const testRoute = asyncHandler(async (req, res) => {
  res.send('hi')
})

//get my list  ship
const getMyShip = asyncHandler(async (req, res) => {
  try {
    const myships = await Ship.find({
      fornisseur: req.client._id.toString() || req.fournisseur._id.toString(),
    })
    if (myships) {
      res.status(201)
      res.json(myships)
    }
  } catch (error) {
    res.status(400)
    throw new Error('no no shipps')
  }
})

//add the first step
const addfirststep = asyncHandler(async (req, res) => {
  console.log(req.body)
  // const id = req.body
  let { firststep } = req.body
  //create product
  const ship = new Ship({
    firststep,
    fornisseuremail: req.client.email,
    fornisseur: req.client.id,
  })

  // console.log(ship)
  const createdShip = await ship.save()

  res.status(201).json(createdShip)
})

//add the Second step
const addsecondstep = asyncHandler(async (req, res) => {
  let { firststep, secondstep } = req.body.datatosend

  //create product
  const ship = new Ship({
    fornisseur: req.client.id,
    fornisseurname: req.client.name,
    fornisseuremail: req.client.email,
    fournisseurcreated: req.client.createdAt,
    firststep,
    secondstep,
  })

  console.log(ship)
  const createdShip = await ship.save()
  res.status(201).json(createdShip)
})

//add sheep
const createShip = asyncHandler(async (req, res) => {
  const { firststep, secondstep, thirdstep } = req.body.datatosend
  //create product
  const ship = new Ship({
    fornisseur: req.client.id,
    fornisseurname: req.client.name,
    fornisseuremail: req.client.email,
    fournisseurcreated: req.client.createdAt,
    firststep,
    secondstep,
    thirdstep,
  })
  const createdShip = await ship.save()
  res.status(201).json(createdShip)
})

//get nbr sheep
//nbr sheep firststep
//nbr sheep secondstep
//nbr sheep thirdstep
const countSheepClient = asyncHandler(async (req, res) => {
  // console.log(req.client)
  const ships = await Ship.aggregate([
    {
      $match: {
        fornisseur: req.client._id,
      },
    },
    {
      $group: {
        _id: req.client._id,
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
  // console.log(ships)
  if (ships && ships.length > 0) {
    res.status(201).json(ships[0])
  } else {
    res.status(401)
    throw new Error('No shipment declared')
  }
})

export {
  getMyShip,
  registerFornisseur,
  authFornisseur,
  testRoute,
  addfirststep,
  addsecondstep,
  createShip,
  countSheepClient,
}
