import React, { useState } from 'react'
import {
  Box,
  TextField,
  Button,
  InputAdornment,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { firstshipAction } from '../../actions/shipActions'

const FirstShipp = ({
  handleNext,
  setshipdata,
  idClient,
  userinfo,
  setActiveNavItem,
}) => {
  const [trackingnumber, settrackingnumber] = useState('')
  const [shipper, setshipper] = useState('')
  const [bookingdate, setbookingdate] = useState('')
  const [coosignereference, setcoosignereference] = useState('')
  const [shipperInvoice, setshipperInvoice] = useState('')
  const [incotern, setincotern] = useState('')
  const [commodites, setcommodites] = useState('')
  const [packages, setpackages] = useState('')
  const [weight, setweight] = useState('')
  const [deliveryterms, setdeliveryterms] = useState('')

  const incoternInfo = [
    'FOB',
    'EXW',
    'DAP',
    'DDP',
    'CIF',
    'CIP',
    'CPT',
    'DPU',
    'FAS',
    'FCA',
  ]

  const deliverytermsInfo = [
    'free',
    'Cash against documents',
    'Avalized counter-draft',
    'Supplier release',
  ]

  const handelClick = () => {
    //next step
    handleNext()
    //grab data
    setshipdata({
      firststep: {
        trackingnumber,
        shipper,
        bookingdate,
        coosignereference,
        shipperInvoice,
        incotern,
        commodites,
        packages,
        weight,
        deliveryterms,
        createdby: userinfo.email,
      },
    })
  }

  const firststep = {
    trackingnumber,
    shipper,
    bookingdate,
    coosignereference,
    shipperInvoice,
    incotern,
    commodites,
    packages,
    weight,
    deliveryterms,
    createdby: userinfo.email,
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //quite step
  const testQuit = () => {
    // console.log(firststep)
    // console.log(idClient)
    //new work
    dispatch(firstshipAction(idClient, { firststep }))
      .then(() => {
        navigate('/dashadmin/listship')
        setActiveNavItem('/dashadmin/listship')
      })
      .catch((error) => {
        console.error('Error creating fornisseur:', error)
      })
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-required"
            label="Tracking Number"
            color="error"
            type="number"
            value={trackingnumber}
            onChange={(e) => settrackingnumber(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="Shipper"
            color="error"
            value={shipper}
            onChange={(e) => setshipper(e.target.value)}
          />
        </div>
        <div>
          <InputLabel
            htmlFor="outlined-required"
            style={{ marginLeft: '8px', marginTop: '10px' }}
          >
            Booking Date
          </InputLabel>

          <TextField
            id="outlined-required"
            type="date"
            color="error"
            // label="Booking Date"
            value={bookingdate}
            onChange={(e) => setbookingdate(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="Coosignee's Reference"
            type="number"
            color="error"
            value={coosignereference}
            onChange={(e) => setcoosignereference(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="Shipper's Invoice n"
            type="number"
            color="error"
            value={shipperInvoice}
            onChange={(e) => setshipperInvoice(e.target.value)}
          />
        </div>
        <div>
          <FormControl
            sx={{ width: { xs: '86%', md: '70%' }, marginLeft: '7px' }}
            mt={2}
            mb={2}
          >
            <InputLabel id="demo-simple-select-label">Incotern</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={incotern}
              label="Incotern"
              onChange={(e) => setincotern(e.target.value)}
            >
              {incoternInfo.map((inco, index) => (
                <MenuItem value={inco} key={index}>
                  {inco}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="Commodites"
            color="error"
            value={commodites}
            onChange={(e) => setcommodites(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="Packages"
            color="error"
            value={packages}
            onChange={(e) => setpackages(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="Weight"
            color="error"
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">kg</InputAdornment>
              ),
            }}
            value={weight}
            onChange={(e) => setweight(e.target.value)}
          />
        </div>
        <div>
          <FormControl
            sx={{ width: { xs: '86%', md: '70%' }, marginLeft: '7px' }}
            mt={2}
            mb={2}
          >
            <InputLabel id="demo-simple-select-label">
              Delivery Terms
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={deliveryterms}
              label="Delivery Terms"
              onChange={(e) => setdeliveryterms(e.target.value)}
            >
              {deliverytermsInfo.map((index, devterm) => (
                <MenuItem key={index} value={devterm}>
                  {devterm}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Box>
      <Box sx={{ mb: 2 }}>
        <div>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handelClick}
            sx={{ mt: 1, mr: 1 }}
          >
            Save & Continue
          </Button>
          <Button
            variant="outlined"
            color="error"
            sx={{ mt: 1, mr: 1 }}
            onClick={testQuit}
          >
            {' '}
            Save and quit
          </Button>
        </div>
      </Box>
    </>
  )
}

export default FirstShipp
