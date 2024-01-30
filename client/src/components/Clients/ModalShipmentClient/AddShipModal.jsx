import React, { useEffect } from 'react'
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Grid,
  StepIcon,
  InputAdornment,
  Input,
  InputLabel,
  FormControl,
} from '@mui/material'

import AccountCircle from '@mui/icons-material/AccountCircle'
import { useDispatch, useSelector } from 'react-redux'
import { ShipByIdAction } from '../../../actions/clientAction'
import { useState } from 'react'
import SecondStepModal from './SecondStepModal'
import ThirdStepModal from './ThirdStepModal'

const AddShippModal = ({ idship, open, handleClose, updateShipmentList }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ShipByIdAction(idship))
  }, [dispatch, idship])

  //display data
  const shipbyidClientReducer = useSelector(
    (state) => state.shipbyidClientReducer,
  )
  const { shipbyid } = shipbyidClientReducer

  let isFirstStepExist = ''
  let isSecondStepExist = ''
  let isthirdStepExist = ''
  //check for the stepthings
  if (shipbyid) {
    isFirstStepExist =
      shipbyid.firststep !== null && shipbyid.firststep !== undefined

    isSecondStepExist =
      shipbyid.secondstep !== null && shipbyid.secondstep !== undefined

    isthirdStepExist =
      shipbyid.thirdstep !== null && shipbyid.thirdstep !== undefined
  }

  useEffect(() => {
    // Set initial step based on shipbyidReducer
    if (isFirstStepExist && !isSecondStepExist && !isthirdStepExist) {
      setActiveStep(1)
    } else if (isFirstStepExist && isSecondStepExist && !isthirdStepExist) {
      setActiveStep(2)
    }
  }, [
    shipbyidClientReducer,
    isFirstStepExist,
    isSecondStepExist,
    isthirdStepExist,
  ])

  //steps work
  const [activeStep, setActiveStep] = useState(0)
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  //end steps work

  const [shipdata, setshipdata] = useState('')

  return (
    <Box
      sx={{
        border: '1px solid #ff6550',
        boxShadow: '7',
        borderRadius: '10px',
      }}
      mt={3}
    >
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'center ',
          alignItems: 'center',
        }}
        m={2}
        p={1}
      >
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            client shippment n
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            readOnly
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>

      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Step>
          <StepLabel
            optional={<Typography variant="caption">First step</Typography>}
            StepIconComponent={(props) => (
              <StepIcon {...props} style={{ color: '#EF4040' }} />
            )}
          >
            Shipment Détails
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            optional={<Typography variant="caption">Second step</Typography>}
            StepIconComponent={(props) => (
              <StepIcon {...props} style={{ color: '#EF4040' }} />
            )}
          >
            PRE-Shipment Process
          </StepLabel>
          <StepContent>
            <SecondStepModal
              handleNext={handleNext}
              setshipdata={setshipdata}
              handleClose={handleClose}
              updateShipmentList={updateShipmentList}
            />
          </StepContent>
        </Step>
        <Step>
          <StepLabel
            optional={<Typography variant="caption">Last step</Typography>}
            StepIconComponent={(props) => (
              <StepIcon {...props} style={{ color: '#EF4040' }} />
            )}
          >
            Shipment Process
          </StepLabel>
          <StepContent>
            <ThirdStepModal
              shipdata={shipdata}
              handleClose={handleClose}
              updateShipmentList={updateShipmentList}
            />
          </StepContent>
        </Step>
      </Stepper>
    </Box>
  )
}
export default AddShippModal
