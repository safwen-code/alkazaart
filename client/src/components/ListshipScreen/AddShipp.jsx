import React, { useState, useEffect, useCallback } from 'react'
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

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import ThirdStep from '../ShippProcess/ThirdStep'
import FirstShipp from '../ShippProcess/FirstShipp'
import SecondStep from '../ShippProcess/SecondStep'

import { shipCreateAction } from '../../actions/shipActions'
import { fornisseurListAction } from '../../actions/fornisseurAction'

const AddShipp = ({ setActiveNavItem }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userinfo } = userLogin

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fornisseurListAction())
  }, [dispatch])
  //get all fornisseur
  const fornisseurList = useSelector((state) => state.fornisseurList)
  const { fornisseurs } = fornisseurList

  //id fornisseur state
  const [idFornisseur, setidFornisseur] = useState('')
  //get id fornisseur
  const onValueChanged = useCallback((e) => {
    setidFornisseur(e.value)
  }, [])

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

  if (shipdata) {
    console.log(shipdata)
  }
  const handleReset = () => {
    setActiveStep(0)
  }

  const navigate = useNavigate()
  //add shippemnt
  const addship = () => {
    console.log(idFornisseur)
    if (userinfo.isAdmin) {
      dispatch(shipCreateAction(idFornisseur, shipdata))
        .then(() => {
          navigate('/dashadmin/listship')
          setActiveNavItem('/dashadmin/listship')
        })
        .catch((error) => {
          console.error('Error creating fornisseur:', error)
        })
    }
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
          dataSource={fornisseurs}
          displayExpr="name"
          valueExpr="_id"
          searchEnabled={true}
          onValueChanged={onValueChanged}
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
              idFornisseur={idFornisseur}
              shipCreateAction={shipCreateAction}
              setActiveNavItem={setActiveNavItem}
            />
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
            <SecondStep
              handleBack={handleBack}
              handleNext={handleNext}
              shipdata={shipdata}
              setshipdata={setshipdata}
              idFornisseur={idFornisseur}
              shipCreateAction={shipCreateAction}
              setActiveNavItem={setActiveNavItem}
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
              idFornisseur={idFornisseur}
              shipCreateAction={shipCreateAction}
              setActiveNavItem={setActiveNavItem}
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
          <Button
            onClick={addship}
            variant="outlined"
            color="error"
            sx={{ mt: 1, mr: 1, ml: 4 }}
          >
            Confirm Ship
          </Button>

          <Button
            onClick={handleReset}
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

export default AddShipp
