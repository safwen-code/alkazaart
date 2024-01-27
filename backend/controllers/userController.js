import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import Ship from '../models/shipModel.js'

//auth user
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('invalid email or passord')
  }
})

//register
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const userExist = await User.findOne({ email })
  if (userExist) {
    res.status(400)
    throw new Error('user exist')
  }
  const user = await User.create({
    name,
    email,
    password,
  })
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('user exist')
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
//get all fornisseur
const getAllFornisseur = asyncHandler(async (req, res) => {
  const fornisseurs = await Fornisseur.find({}).sort({ createdAt: -1 })
  if (!fornisseurs) {
    res.status(400)
    throw new Error('no fornisseurs')
  } else {
    res.status(201)
    res.json(fornisseurs)
  }
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

export {
  authUser,
  registerUser,
  addfirststep,
  addsecondstep,
  createShip,
  countSheepClient,
  getAllFornisseur,
  registerFornisseur,
}
