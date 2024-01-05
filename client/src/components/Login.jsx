import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  Grid,
  TextField,
  Card,
  CardContent,
  Button,
  CardHeader,
  Avatar,
} from '@mui/material'

import { loginuser } from '../actions/userActions'
import atvyl from '../images/atvyl.jpg'
import Alerts from '../layout/Alerts.jsx'
import { alertaction } from '../actions/alertAction.js'

const Login = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const alertThing = useSelector((state) => state.alertThing)
  const { alert } = alertThing

  const submitHundler = async (e) => {
    e.preventDefault()

    let test = await dispatch(loginuser(email, password))

    if (test) {
      navigate('/dashadmin')
      dispatch(alertaction('welcom to bord'))
    } else {
      navigate('/')
      dispatch(alertaction('access denied'))
    }
  }
  return (
    <>
      {alert && alert && <Alerts message={alert} />}
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
            title="Welcome to ATVYL Transport"
            avatar={
              <Avatar
                src={atvyl}
                alt="atvylimage"
                sx={{ marginBottom: '8px', boxShadow: 5 }}
              />
            }
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
              label="Admin Email "
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
    </>
  )
}

export default Login
