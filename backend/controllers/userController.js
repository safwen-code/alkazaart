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
export { authUser, registerUser, addfirststep, addsecondstep, createShip }
