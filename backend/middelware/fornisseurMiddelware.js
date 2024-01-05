import jwt, { decode } from 'jsonwebtoken'
import Fornisseur from '../models/fornisseurModel.js'
import asyncHandler from 'express-async-handler'

const fornisseurProtect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.fornisseur = await Fornisseur.findById(decoded.id).select('-password')
      if (req.fornisseur === null) {
        return next(new Error('is not fornisseur access denied', 401))
      }
      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized , token failed')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Not authorized , no token')
  }
})

export { fornisseurProtect }
