import React, { useEffect } from 'react'
import {
  Paper,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Button,
  Grid,
  StepIcon,
} from '@mui/material'
import { SelectBox } from 'devextreme-react/select-box'
import { getshipAction } from '../../../actions/shipActions'
import { useDispatch, useSelector } from 'react-redux'
import FirstShippModal from './FirstShippModal'
import SecondStepModal from './SecondStepModal'
import { useState } from 'react'
import ThirdStepModal from './ThirdStepModal'

const AddShippModal = ({ idship }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getshipAction(idship))
  }, [idship, dispatch])

  const shipbyidReducer = useSelector((state) => state.shipbyidReducer)

  //check for the stepthings
  const [activeStep, setActiveStep] = useState(0)
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
        <SelectBox
          //   dataSource={clients}
          displayExpr="name"
          valueExpr="_id"
          searchEnabled={true}
        />
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
          <StepContent>
            <FirstShippModal />
          </StepContent>
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
            <SecondStepModal />
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
            <ThirdStepModal />
          </StepContent>
        </Step>
      </Stepper>

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
        <Button variant="outlined" color="error" sx={{ mt: 1, mr: 1, ml: 4 }}>
          Confirm Ship
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          sx={{ mt: 1, mr: 1, ml: 4 }}
        >
          Annuller
        </Button>
      </Paper>
    </Box>
  )
}

export default AddShippModal
