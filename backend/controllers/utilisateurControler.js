import Utilisateur from '../models/utilisateurModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'

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
const registerUtilsateur = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body
  const utilisateurExist = await Utilisateur.findOne({ email })
  if (utilisateurExist) {
    res.status(400)
    throw new Error('utilisateur exist')
  }
  const utilisateur = await Utilisateur.create({
    name,
    email,
    password,
    role,
  })
  if (utilisateur) {
    res.status(201).json({
      _id: utilisateur._id,
      name: utilisateur.name,
      email: utilisateur.email,
      password: utilisateur.password,
      role: utilisateur.role,
      token: generateToken(utilisateur._id),
    })
  } else {
    res.status(400)
    throw new Error('utilisateur exist')
  }
})

//get all utilisateur
const allutilisateur = asyncHandler(async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.find({})
    if (utilisateurs) {
      res.status(200).json(utilisateurs)
    }
  } catch (error) {
    throw new Error('no utilisateurs')
  }
})

//delete**
//update**

export { registerUtilsateur, allutilisateur }
