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
import { getshipAction } from '../../../actions/shipActions'
import { useDispatch, useSelector } from 'react-redux'
import SecondStepModal from './SecondStepModal'
import { useState } from 'react'
import ThirdStepModal from './ThirdStepModal'

import AccountCircle from '@mui/icons-material/AccountCircle'

const AddShippModal = ({ idship, handleClose, updateShipmentList }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getshipAction(idship))
  }, [idship, dispatch])

  const shipbyidReducer = useSelector((state) => state.shipbyidReducer)

  //check for the stepthings
  const isFirstStepExist =
    shipbyidReducer.firststep !== null &&
    shipbyidReducer.firststep !== undefined

  const isSecondStepExist =
    shipbyidReducer.secondstep !== null &&
    shipbyidReducer.secondstep !== undefined

  const isthirdStepExist =
    shipbyidReducer.thirdstep !== null &&
    shipbyidReducer.thirdstep !== undefined

  useEffect(() => {
    // Set initial step based on shipbyidReducer
    if (isFirstStepExist && !isSecondStepExist && !isthirdStepExist) {
      setActiveStep(1)
    } else if (isFirstStepExist && isSecondStepExist && !isthirdStepExist) {
      setActiveStep(2)
    }
  }, [shipbyidReducer, isFirstStepExist, isSecondStepExist, isthirdStepExist])

  //steps work
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  //end steps work

  let { fornisseuremail } = shipbyidReducer

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
            value={fornisseuremail}
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
