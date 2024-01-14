import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Container } from '@mui/material'
import Login from './components/Login'
import DashAdmin from './components/DashAdmin.jsx'
import LoginClient from './components/Clients/LoginClient.jsx'
import DashClient from './components/Clients/DashClient.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route excat path="/" element={<Login />} />
          <Route path="/dashadmin/*" element={<DashAdmin />}></Route>
          <Route exact path="/loginclient" element={<LoginClient />} />
          <Route path="/dashclient/*" element={<DashClient />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
