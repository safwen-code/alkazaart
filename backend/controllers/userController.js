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
  //get fornisseur by his Id
  // const id = req.body.id
  // const admindata = await Fornisseur.findById({ _id: id })
  // let { email } = admindata

  let { firststep } = req.body

  //create product
  const ship = new Ship({
    firststep,
  })

  console.log(ship)
  const createdShip = await ship.save()
  res.status(201).json(createdShip)
})

//add the Second step
const addsecondstep = asyncHandler(async (req, res) => {
  //get fornisseur by his Id
  const id = req.body.id
  // const fornisseurdata = await Fornisseur.findById({ _id: id })
  // let { name, email, createdAt } = fornisseurdata

  let { firststep, secondstep } = req.body

  //create product
  const ship = new Ship({
    // fornisseur: id,
    // fornisseurname: name,
    // fornisseuremail: email,
    // fournisseurcreated: createdAt,
    firststep,
    secondstep,
  })

  console.log(ship)
  const createdShip = await ship.save()
  res.status(201).json(createdShip)
})

//add sheep
const createShip = asyncHandler(async (req, res) => {
  // console.log(req.user)

  //get fornisseur by his Id
  const id = req.body.id
  // const fornisseurdata = await Fornisseur.findById({ _id: id })
  // let { name, email, createdAt } = fornisseurdata

  const { firststep, secondstep, thirdstep } = req.body
  //create product
  const ship = new Ship({
    // fornisseur: id,
    // fornisseurname: name,
    // fornisseuremail: email,
    // fournisseurcreated: createdAt,
    firststep,
    secondstep,
    thirdstep,
  })
  const createdShip = await ship.save()
  res.status(201).json(createdShip)
})
export { authUser, registerUser, addfirststep, addsecondstep, createShip }
