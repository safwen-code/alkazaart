import React, { useState } from 'react'
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fornisseurCreateAction } from '../../actions/fornisseurAction.js'

const CreateFornisseur = ({ setActiveNavItem }) => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHundler = (e) => {
    e.preventDefault()
    dispatch(fornisseurCreateAction({ name, email, password }))
      .then(() => {
        navigate('/dashadmin/listfornisseur')
        setActiveNavItem('/dashadmin/listfornisseur')
      })
      .catch((error) => {
        console.error('Error creating fornisseur:', error)
      })
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
          height: '400px',
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
          title="Create Fornisseur"
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
            label="Fornisseur Name"
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
            label="Fornisseur Email "
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

export default CreateFornisseur
