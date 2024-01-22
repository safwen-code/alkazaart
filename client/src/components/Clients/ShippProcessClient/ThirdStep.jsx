import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addshipAction } from '../../../actions/userActions'

const ThirdStep = ({ shipdata, handleNext, handleBack, setshipdata }) => {
  const [etaSete, setetaSete] = useState('')
  const [etdMarseille, setetdMarseille] = useState('')
  const [etaRades, setetaRades] = useState('')
  const [etdAtvyl, setetdAtvyl] = useState('')
  const [customeredd, setcustomeredd] = useState('')
  const [comment, setcomment] = useState('')

  const handelClick = () => {
    handleNext()
    setshipdata({
      ...shipdata,
      thirdstep: {
        etaSete,
        etdMarseille,
        etaRades,
        etdAtvyl,
        customeredd,
        comment,
        // createdby: userinfo.email,
      },
    })
  }
  const thirdstep = {
    etaSete,
    etdMarseille,
    etaRades,
    etdAtvyl,
    customeredd,
    comment,
    // createdby: userinfo.email,
  }
  let datatosend = { ...shipdata, thirdstep }
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const testQuit = () => {
    console.log(datatosend)
    //work to :: send data /ship/adddata
    dispatch(addshipAction(datatosend))
    //   .then(() => {
    //     navigate('/dashadmin/listship')
    //     setActiveNavItem('/dashadmin/listship')
    //   })
    //   .catch((error) => {
    //     console.error('Error creating fornisseur:', error)
    //   })
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

export default ThirdStep
