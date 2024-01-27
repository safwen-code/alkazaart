import React from 'react'
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

const AddShippModal = () => {
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
          <StepContent>second step</StepContent>
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
          <StepContent>third step</StepContent>
        </Step>
      </Stepper>
    </Box>
  )
}
export default AddShippModal
