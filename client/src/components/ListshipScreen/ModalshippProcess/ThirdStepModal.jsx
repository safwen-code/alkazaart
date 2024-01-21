import React, { useState } from 'react'
import { Box, TextField, Button, Paper } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { updateShipModalAction } from '../../../actions/shipActions'

const ThirdStepModal = ({ shipdata }) => {
  const [etaSete, setetaSete] = useState('')
  const [etdMarseille, setetdMarseille] = useState('')
  const [etaRades, setetaRades] = useState('')
  const [etdAtvyl, setetdAtvyl] = useState('')
  const [customeredd, setcustomeredd] = useState('')
  const [comment, setcomment] = useState('')

  const thirdstep = {
    etaSete,
    etdMarseille,
    etaRades,
    etdAtvyl,
    customeredd,
    comment,
  }
  let datatosend = { ...shipdata, thirdstep }

  const dispatch = useDispatch()
  const shipbyidReducer = useSelector((state) => state.shipbyidReducer)
  const { _id } = shipbyidReducer
  const confirmShip = () => {
    dispatch(updateShipModalAction(_id, datatosend))
    //work to :: send data /ship/adddata
    // console.log(datatosend)
    // console.log('confirm ship')
  }

  const closeModal = () => {
    console.log('close modal')
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
            label="ETA séte"
            color="error"
            value={etaSete}
            onChange={(e) => setetaSete(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="ETD Marseille"
            color="error"
            value={etdMarseille}
            onChange={(e) => setetdMarseille(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="ETA Rades"
            color="error"
            value={etaRades}
            onChange={(e) => setetaRades(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="ETD ATVYL"
            color="error"
            value={etdAtvyl}
            onChange={(e) => setetdAtvyl(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="Customer EDD"
            color="error"
            value={customeredd}
            onChange={(e) => setcustomeredd(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="Comments"
            color="error"
            value={comment}
            onChange={(e) => setcomment(e.target.value)}
          />
        </div>
      </Box>
      <Paper
        square
        elevation={0}
        sx={{
          p: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          onClick={confirmShip}
          variant="outlined"
          color="error"
          sx={{ mt: 1, mr: 1, ml: 4 }}
        >
          Confirm Ship
        </Button>

        <Button
          onClick={closeModal}
          variant="outlined"
          color="secondary"
          sx={{ mt: 1, mr: 1, ml: 4 }}
        >
          Annuller
        </Button>
      </Paper>
    </>
  )
}

export default ThirdStepModal
