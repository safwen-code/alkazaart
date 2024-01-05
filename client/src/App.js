import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Container } from '@mui/material'
import Login from './components/Login'
import DashAdmin from './components/DashAdmin.jsx'
import LoginFornisseur from './components/Fornisseur/LoginFornisseur.jsx'
import DashFornisseur from './components/Fornisseur/DashFornisseur.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route excat path="/" element={<Login />} />
          <Route path="/dashadmin/*" element={<DashAdmin />}></Route>
          <Route exact path="/loginfournisseur" element={<LoginFornisseur />} />
          <Route path="/dashfournisseur/*" element={<DashFornisseur />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
