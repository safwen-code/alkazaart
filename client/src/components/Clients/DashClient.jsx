import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, Box } from '@mui/material'
import NavbarFor from './NavbarFor.jsx'
import ContainersClient from './ContainersClient'

const DashFornisseur = () => {
  const clientLogin = useSelector((state) => state.clientLogin)
  const { clientinfo } = clientLogin

  const [activeNavItem, setActiveNavItem] = useState('/dashclient/myships')
  return (
    <Container>
      {clientinfo && (
        <NavbarFor
          activeNavItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
        />
      )}
      <Box sx={{ flexGrow: 1 }} p={1} mt={1}>
        {clientinfo && (
          <ContainersClient
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
          />
        )}
      </Box>
    </Container>
  )
}

export default DashFornisseur
