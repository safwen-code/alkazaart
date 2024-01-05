import React, { useState } from 'react'
import {
  Grid,
  TextField,
  Card,
  CardHeader,
  CardContent,
  Button,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { loginfornisseur } from '../../actions/fornisseurAction'
import { useNavigate } from 'react-router-dom'

const LoginFornisseur = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const submitHundler = (e) => {
    let test = dispatch(loginfornisseur(email, password))
    if (test) {
      navigate('/dashfournisseur')
    } else {
      navigate('/loginfournisseur')
    }
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        flexDirection: 'column',
      }}
    >
      <Card
        sx={{
          marginTop: '40px',
          width: { sm: '90%', md: '589px' },
          height: '350px',
          boxShadow: '6',
          borderRadius: '10px',
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
          title="Espace fournisseur"
          //   avatar={
          //     <Avatar
          //       src={atvyl}
          //       alt="atvylimage"
          //       sx={{ marginBottom: '8px', boxShadow: 5 }}
          //     />
          //   }
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
            label="fournisseur Email "
            variant="standard"
            margin="dense"
            name="email"
            sx={{ width: { md: '300px' } }}
            style={{ marginBottom: '10px' }}
            color="error"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <TextField
            required
            id="standard-read-only-input"
            label="Password please"
            variant="standard"
            margin="dense"
            name="password"
            color="error"
            value={password}
            sx={{ width: { md: '300px' } }}
            style={{ marginBottom: '10px' }}
            onChange={(e) => setpassword(e.target.value)}
          />
          <Button
            color="error"
            onClick={submitHundler}
            style={{ width: '150px', marginTop: '30px' }}
            variant="outlined"
          >
            Log In
          </Button>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default LoginFornisseur
