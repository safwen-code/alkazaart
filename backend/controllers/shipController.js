import Ship from '../models/shipModel.js'
import asyncHandler from 'express-async-handler'
import Fornisseur from '../models/fornisseurModel.js'

//add sheep
const createShip = asyncHandler(async (req, res) => {
  //create firststep
  const firststep = {
    trackingnumber: req.body.trackingnumber,
    shipper: req.body.shipper,
    bookingdate: req.body.bookingdate,
    coosignereference: req.body.coosignereference,
    shipperInvoice: req.body.shipperInvoice,
    incotern: req.body.incotern,
    commodites: req.body.commodites,
    packages: req.body.packages,
    weight: req.body.weight,
    deliveryterms: req.body.deliveryterms,
  }
  //create secondstep
  const secondstep = {
    date: req.body.date,
    orderstatus: req.body.orderstatus,
    scheduled: req.body.scheduled,
    pickedmars: req.body.pickedmars,
    delevered: req.body.delevered,
    pickelocation: req.body.pickelocation,
    etdIstanbul: req.body.etdIstanbul,
    CMR: req.body.CMR,
    trailer: req.body.trailer,
  }

  //create thirdstep
  const thirdstep = {
    etaSete: req.body.etaSete,
    etdMarseille: req.body.etdMarseille,
    etaRades: req.body.etaRades,
    etdAtvyl: req.body.etdAtvyl,
    customeredd: req.body.customeredd,
    comment: req.body.comment,
  }

  //get fornisseur by his Id
  const idfornisseur = req.params.idfornisseur
  const fornisseurdata = await Fornisseur.findById({ _id: idfornisseur })

  let { name, email, createdAt } = fornisseurdata

  //create product
  const ship = new Ship({
    fornisseur: idfornisseur,
    fornisseurname: name,
    fornisseuremail: email,
    fournisseurcreated: createdAt,
    firststep: req.body.firststep,
    secondstep: req.body.secondstep,
    thirdstep: req.body.thirdstep,
  })
  const createdShip = await ship.save()
  res.status(201).json(createdShip)
})

//get allShip
//to do
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

export { createShip, getAllShip, countSheep }
