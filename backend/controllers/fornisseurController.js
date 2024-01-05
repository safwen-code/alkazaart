import Fornisseur from '../models/fornisseurModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'

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

//test data
const testRoute = asyncHandler(async (req, res) => {
  res.send('hi')
})

export { registerFornisseur, getAllFornisseur, authFornisseur, testRoute }
