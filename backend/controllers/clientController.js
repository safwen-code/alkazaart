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

export { getMyShip, registerFornisseur, authFornisseur, testRoute }
