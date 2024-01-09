import React, { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { addutilisateurAction } from '../../actions/utilisateurAction'

const AddUtilisateur = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [role, setrole] = useState('')

  const dispatch = useDispatch()

  const submitHundler = (e) => {
    console.log({ name, email, password, role })
    dispatch(addutilisateurAction({ name, email, password, role }))
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        // border: '1px solid #ff6550',
        flexDirection: 'column',
      }}
    >
      <Card
        sx={{
          width: { sm: '90%', md: '589px' },
          height: '70%',
          boxShadow: '4',
          borderRadius: '7px',
        }}
      >
        <CardHeader
          sx={{
            margin: '7px 3px 0px 3px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            color: '#B80000',
          }}
          title="Create Utilisateur"
        />
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <TextField
            required
            id="standard-read-only-input"
            label="Utilisateur Name"
            variant="standard"
            margin="dense"
            name="name"
            color="error"
            value={name}
            onChange={(e) => setname(e.target.value)}
            sx={{ width: { md: '300px' } }}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            required
            id="standard-read-only-input"
            label="utilisateur Email "
            variant="standard"
            margin="dense"
            name="email"
            color="error"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            sx={{ width: { md: '300px' } }}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            required
            id="standard-read-only-input"
            label="Create Password "
            variant="standard"
            margin="dense"
            name="password"
            color="error"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            sx={{ width: { md: '300px' } }}
            style={{ marginBottom: '10px' }}
            mb={4}
          />

          <FormControl
            sx={{ width: { xs: '86%', md: '55%' }, marginLeft: '7px' }}
            mt={2}
            mb={2}
          >
            <InputLabel id="demo-simple-select-label">role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Role"
              onChange={(e) => setrole(e.target.value)}
            >
              <MenuItem value="display">Display</MenuItem>
              <MenuItem value="update">Update</MenuItem>
              <MenuItem value="delete">Delete</MenuItem>
            </Select>
          </FormControl>

          <Button
            onClick={submitHundler}
            style={{ width: '150px', marginTop: '30px' }}
            variant="outlined"
            color="error"
          >
            Create
          </Button>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default AddUtilisateur
