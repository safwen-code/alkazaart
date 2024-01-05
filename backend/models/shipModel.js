import mongoose from 'mongoose'

const shipSchema = mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'User',
  // },
  fornisseur: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Fornisseur',
  },
  fornisseurname: {
    type: String,
  },
  fornisseuremail: {
    type: String,
  },
  fornisseurcreated: {
    type: String,
  },
  firststep: {
    trackingnumber: {
      type: Number,
      default: 0,
    },
    shipper: {
      type: String,
    },
    bookingdate: {
      type: String,
    },
    coosignereference: {
      type: Number,
    },
    shipperInvoice: {
      type: Number,
    },
    incotern: {
      type: String,
    },
    commodites: {
      type: String,
    },
    packages: {
      type: String,
    },
    weight: {
      type: Number,
    },
    deliveryterms: {
      type: String,
    },
  },
  secondstep: {
    date: {
      type: String,
    },
    orderstatus: {
      type: String,
    },
    scheduled: {
      type: String,
    },
    pickedmars: {
      type: String,
    },
    delevered: {
      type: String,
    },
    pickelocation: {
      type: String,
    },
    etdIstanbul: {
      type: String,
    },
    CMR: {
      type: Number,
    },
    trailer: {
      type: Number,
    },
  },
  thirdstep: {
    etaSete: {
      type: String,
    },
    etdMarseille: {
      type: String,
    },
    etaRades: {
      type: String,
    },
    etdAtvyl: {
      type: String,
    },
    customeredd: {
      type: String,
    },
    comment: {
      type: String,
    },
  },
})
const Ship = mongoose.model('Ship', shipSchema)
export default Ship
