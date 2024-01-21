import React, { useState } from 'react'
import {
  Box,
  TextField,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SecondStepModal = ({ handleNext, setshipdata }) => {
  const [date, setdate] = useState('')
  const [orderstatus, setorderstatus] = useState('')
  const [scheduled, setscheduled] = useState('')
  const [pickedmars, setpickedmars] = useState('')
  const [delevered, setdelevered] = useState('')
  const [pickelocation, setpickelocation] = useState('')
  const [etdIstanbul, setetdIstanbul] = useState('')
  const [CMR, setCMR] = useState('')
  const [trailer, settrailer] = useState('')

  const orderstatusInfo = [
    'New Shipment announced ',
    'Corgo still not ready',
    'Cargo ready',
    'Pending payement',
    'Processing',
    'On hold',
    'Delivered',
  ]

  const pickelocationInfo = ['Mars Logistics Hub', 'Suppliers Warehouse']

  const handelClick = () => {
    handleNext()
    //grab Data
    setshipdata({
      secondstep: {
        date,
        orderstatus,
        scheduled,
        pickedmars,
        delevered,
        pickelocation,
        etdIstanbul,
        CMR,
        trailer,
      },
    })
  }

  const secondstep = {
    date,
    orderstatus,
    scheduled,
    pickedmars,
    delevered,
    pickelocation,
    etdIstanbul,
    CMR,
    trailer,
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //quite step
  const testQuit = () => {
    //work to :: send data /ship/adddata ==>step2
    console.log(secondstep)
    console.log('quite second ship')
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
          <InputLabel
            htmlFor="outlined-required"
            style={{ marginLeft: '8px', marginTop: '10px' }}
          >
            Date
          </InputLabel>
          <TextField
            id="outlined-required"
            type="date"
            color="error"
            value={date}
            onChange={(e) => setdate(e.target.value)}
          />
        </div>
        <div>
          <FormControl
            sx={{ width: { xs: '86%', md: '57%' }, marginLeft: '7px' }}
            mt={2}
            mb={2}
          >
            <InputLabel id="demo-simple-select-label">Order Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={orderstatus}
              label="Order Status"
              onChange={(e) => setorderstatus(e.target.value)}
            >
              {orderstatusInfo.map((order) => (
                <MenuItem value={order}>{order}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div>
          <InputLabel
            htmlFor="outlined-required"
            style={{ marginLeft: '8px', marginTop: '10px' }}
          >
            Sheduled pick-up date
          </InputLabel>

          <TextField
            id="outlined-required"
            color="error"
            // label="Sheduled pick-up date"
            type="datetime-local"
            value={scheduled}
            onChange={(e) => setscheduled(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="Picked up by Mars"
            color="error"
            value={pickedmars}
            onChange={(e) => setpickedmars(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="Delivered by Shipper"
            color="error"
            value={delevered}
            onChange={(e) => setdelevered(e.target.value)}
          />
        </div>
        <div>
          <FormControl
            sx={{ width: { xs: '86%', md: '57%' }, marginLeft: '7px' }}
            mt={2}
            mb={2}
          >
            <InputLabel id="demo-simple-select-label">
              Picked up Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={pickelocation}
              label="Picked up Location"
              onChange={(e) => setpickelocation(e.target.value)}
            >
              {pickelocationInfo.map((pickedup) => (
                <MenuItem value={pickedup}>{pickedup}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="ETD Istanbul"
            color="error"
            value={etdIstanbul}
            onChange={(e) => setetdIstanbul(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="CMR Num"
            color="error"
            value={CMR}
            type="number"
            onChange={(e) => setCMR(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="Trailer num"
            color="error"
            value={trailer}
            type="number"
            onChange={(e) => settrailer(e.target.value)}
          />
        </div>
      </Box>
      <Box sx={{ mb: 2 }}>
        <div>
          <Button
            variant="outlined"
            onClick={handelClick}
            sx={{ mt: 1, mr: 1 }}
            color="secondary"
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

export default SecondStepModal
