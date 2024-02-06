import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import Ship from '../models/shipModel.js'
import Fornisseur from '../models/fornisseurModel.js'
import nodemailer from 'nodemailer'

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

//register user
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

export { authUser, registerUser, getAllFornisseur, registerFornisseur }
