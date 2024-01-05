import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, Box } from '@mui/material'
import Navbar from './Navbar'
import Containers from './Containers'

const DashAdmin = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userinfo } = userLogin

  const [activeNavItem, setActiveNavItem] = useState('/dashadmin/listship')
  return (
    <Container>
      {userinfo && userinfo.isAdmin && (
        <Navbar
          activeNavItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
        />
      )}
      <Box sx={{ flexGrow: 1 }} p={1} mt={1}>
        {userinfo && (
          <Containers
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
          />
        )}
      </Box>
    </Container>
  )
}

export default DashAdmin
