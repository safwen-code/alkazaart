import {
  Box,
  Button,
  Grid,
  Paper,
  Step,
  StepContent,
  StepIcon,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'
import SelectBox from 'devextreme-react/cjs/select-box'
import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FirstShipp from './FirstShipp'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
const CreateShip = () => {
  //get the login user
  const userLogin = useSelector((state) => state.userLogin)
  const { userinfo } = userLogin

  const dispatch = useDispatch()

  //get the admin
  // useEffect(() => {
  //   dispatch(clientListAction())
  // }, [dispatch])

  //get  the admin
  // const clientList = useSelector((state) => state.clientList)
  // const { clients } = clientList

  // //id fornisseur state
  // const [idAdmin, setidAdmin] = useState('')
  // //get id admin
  // const onValueChanged = useCallback((e) => {
  //   setidAdmin(e.value)
  // }, [])

  //steps work
  const [activeStep, setActiveStep] = useState(0)
  const [shipdata, setshipdata] = useState({
    firststep: null,
    secondstep: null,
    thirdstep: null,
  })
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  //end steps work

  const handleReset = () => {
    setActiveStep(0)
  }

  //add shippemnt
  const addship = () => {
    console.log(shipdata, 'add shipp')
  }

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
          dataSource={[]}
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
            <FirstShipp
              handleBack={handleBack}
              handleNext={handleNext}
              shipdata={shipdata}
              setshipdata={setshipdata}
            />{' '}
          </StepContent>{' '}
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
            <SecondStep
              handleBack={handleBack}
              handleNext={handleNext}
              shipdata={shipdata}
              setshipdata={setshipdata}
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
            <ThirdStep
              handleBack={handleBack}
              handleNext={handleNext}
              shipdata={shipdata}
              setshipdata={setshipdata}
            />
          </StepContent>
        </Step>
      </Stepper>

      {activeStep === 3 && (
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
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  )
}

export default CreateShip
