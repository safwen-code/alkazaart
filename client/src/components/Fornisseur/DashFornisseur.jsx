import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, Box } from '@mui/material'
import NavbarFor from './NavbarFor.jsx'
// import Containers from './Containers'

const DashFornisseur = () => {
  const fornisseurLogin = useSelector((state) => state.fornisseurLogin)
  const { fornisseurinfo } = fornisseurLogin

  const [activeNavItem, setActiveNavItem] = useState('/dashfournisseur/myships')
  return (
    <Container>
      {fornisseurinfo && (
        <NavbarFor
          activeNavItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
        />
      )}
      <Box sx={{ flexGrow: 1 }} p={1} mt={1}>
        {/* {userinfo && (
          <Containers
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
          />
        )} */}
      </Box>
    </Container>
  )
}

export default DashFornisseur
