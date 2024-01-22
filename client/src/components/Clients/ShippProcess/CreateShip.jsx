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

const CreateShip = () => {
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
          <StepContent>firststep </StepContent>{' '}
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
          <StepContent>third step </StepContent>
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
          Reset
        </Button>
      </Paper>
    </Box>
  )
}

export default CreateShip
