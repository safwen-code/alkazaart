import React, { useState } from 'react'
import { Box, TextField, Button, InputLabel } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SecondStep = ({
  shipdata,
  handleNext,
  handleBack,
  setshipdata,
  idFornisseur,
  shipCreateAction,
  setActiveNavItem,
}) => {
  const [date, setdate] = useState('')
  const [orderstatus, setorderstatus] = useState('')
  const [scheduled, setscheduled] = useState('')
  const [pickedmars, setpickedmars] = useState('')
  const [delevered, setdelevered] = useState('')
  const [pickelocation, setpickelocation] = useState('')
  const [etdIstanbul, setetdIstanbul] = useState('')
  const [CMR, setCMR] = useState('')
  const [trailer, settrailer] = useState('')

  const handelClick = () => {
    handleNext()
    //grab Data
    setshipdata({
      ...shipdata,
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
  let datatosend = { ...shipdata, secondstep }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //quite step
  const testQuit = () => {
    //work to :: send data /ship/adddata

    dispatch(shipCreateAction(idFornisseur, datatosend))
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
          <TextField
            id="outlined-required"
            label="Order Status"
            color="error"
            value={orderstatus}
            onChange={(e) => setorderstatus(e.target.value)}
          />
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
          <TextField
            id="outlined-required"
            label="Picked up Location"
            color="error"
            value={pickelocation}
            onChange={(e) => setpickelocation(e.target.value)}
          />
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
          <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
            Back
          </Button>
        </div>
      </Box>
    </>
  )
}

export default SecondStep
