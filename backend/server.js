import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import shipRoutes from './routes/shipRoutes.js'
import fornisseurRoutes from './routes/fornisseurRoutes.js'
import path from 'path'

dotenv.config()
const app = express()

//send body
app.use(express.json())

// Enable CORS for all routes
app.use(cors())

connectDB()

//use Created routes
app.use('/api/users', userRoutes)
app.use('/api/ship', shipRoutes)
app.use('/api/fornisseur', fornisseurRoutes)

const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
} else {
  app.get('/test', (req, res) => {
    res.send('API running')
  })
}

//create port
const port = process.env.PORT || 5000

//create server
app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} on port ${port}  `.yellow
      .bold,
  )
})
