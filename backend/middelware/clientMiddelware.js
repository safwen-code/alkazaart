import jwt, { decode } from 'jsonwebtoken'
import Fornisseur from '../models/fornisseurModel.js'
import asyncHandler from 'express-async-handler'

const clientProtect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.client = await Fornisseur.findById(decoded.id).select('-password')
      if (req.client === null) {
        return next(new Error('is not client access denied', 401))
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

export { clientProtect }
