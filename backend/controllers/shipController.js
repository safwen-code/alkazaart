import Ship from '../models/shipModel.js'
import asyncHandler from 'express-async-handler'
import Fornisseur from '../models/fornisseurModel.js'
import nodemailer from 'nodemailer'

//get allShip
const getAllShip = asyncHandler(async (req, res) => {
  const ships = await Ship.find({})
  if (ships) {
    res.status(201)
    res.json({ ships })
  } else {
    res.status(401)
    throw new Error('no shippment declared')
  }
})

//get nbr sheep
//nbr sheep firststep
//nbr sheep secondstep
//nbr sheep thirdstep
const countSheep = asyncHandler(async (req, res) => {
  const ships = await Ship.aggregate([
    {
      $group: {
        _id: null,
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

  if (ships && ships.length > 0) {
    res.status(201).json(ships[0])
  } else {
    res.status(401)
    throw new Error('No shipment declared')
  }
})

//get ship by id
const getShipById = asyncHandler(async (req, res) => {
  try {
    const idship = req.params.id
    const ship = await Ship.findById({ _id: idship })
    if (ship) {
      res.status(200).json(ship)
    }
  } catch (error) {
    throw new Error(error)
  }
})

//add the first step
const addfirststep = asyncHandler(async (req, res) => {
  //get fornisseur by his Id
  const id = req.body.id
  const fornisseurdata = await Fornisseur.findById({ _id: id })
  let { name, email, createdAt } = fornisseurdata

  let { firststep } = req.body
  //create product
  const ship = new Ship({
    fornisseur: id,
    fornisseurname: name,
    fornisseuremail: email,
    fournisseurcreated: createdAt,
    firststep,
  })

  const createdShip = await ship.save()
  // Send email to the supplier
  sendEmailToSupplier(
    'safwendjebbi1234@gmail.com',
    'First Step Completed',
    'The first step has been completed for your product.',
  )

  res.status(201).json(createdShip)
})

// Function to send email using nodemailer
const sendEmailToSupplier = async (to, subject, text) => {
  // Configure the email transporter (you need to replace the placeholders with your actual email details)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'safwendjebbi1234@gmail.com',
      pass: 'qwaj tpjl bpcy rdls',
    },
  })

  // Configure the email options
  const mailOptions = {
    from: 'safwendjebbi1234@gmail.com',
    to,
    subject,
    text,
  }

  // Send the email
  await transporter.sendMail(mailOptions)
}

//add the Second step
const addsecondstep = asyncHandler(async (req, res) => {
  //get fornisseur by his Id
  const id = req.body.id
  const fornisseurdata = await Fornisseur.findById({ _id: id })
  let { name, email, createdAt } = fornisseurdata

  let { firststep, secondstep } = req.body.datatosend

  //create product
  const ship = new Ship({
    fornisseur: id,
    fornisseurname: name,
    fornisseuremail: email,
    fournisseurcreated: createdAt,
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
  const fornisseurdata = await Fornisseur.findById({ _id: id })
  let { name, email, createdAt } = fornisseurdata

  const { firststep, secondstep, thirdstep } = req.body.datatosend
  //create product
  const ship = new Ship({
    fornisseur: id,
    fornisseurname: name,
    fornisseuremail: email,
    fournisseurcreated: createdAt,
    firststep,
    secondstep,
    thirdstep,
  })
  const createdShip = await ship.save()
  res.status(201).json(createdShip)
})

//update current ship
const updateCurrentShip = asyncHandler(async (req, res) => {
  const id = req.body.id
  const secondstep = req.body.datatosend.secondstep
  const thirdstep = req.body.datatosend.thirdstep

  const updateStatement = {}

  if (secondstep !== undefined) {
    updateStatement.secondstep = secondstep
  }

  if (thirdstep !== undefined) {
    updateStatement.thirdstep = thirdstep
  }

  const ship = await Ship.findById({ _id: id })

  if (!ship) {
    throw new Error('No ship found with the given id')
  } else {
    const update = await Ship.findOneAndUpdate(
      { _id: id },
      updateStatement, // Corrected: Pass the object directly
      { new: true },
    )

    await update.save()
    res.status(200).json({ update })
  }
})

export {
  createShip,
  getAllShip,
  countSheep,
  getShipById,
  addfirststep,
  addsecondstep,
  updateCurrentShip,
}
