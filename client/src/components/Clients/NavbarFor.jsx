import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Button,
  Container,
  MenuItem,
  Avatar,
} from '@mui/material'

import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import atvyl from '../../images/atvyl.jpg'
import { alpha } from '@mui/system'
import Notification from './Notification'

const pages = ['myships', 'addship']

const NavbarFor = ({ setActiveNavItem }) => {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const navigate = useNavigate()

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null)

    switch (page) {
      case 'myships':
        navigate('/dashclient/myships')
        setActiveNavItem('/dashclient/myships')
        break
      case 'addship':
        navigate('/dashclient/addship')
        setActiveNavItem('/dashclient/addship')
        break
      default:
        navigate('/dashclient/myships')
        setActiveNavItem('/dashclient/myships')
    }
  }

  //hundel content Movement
  const hundelNavItem = (page) => {
    switch (page) {
      case 'myships':
        navigate('/dashclient/myships')
        setActiveNavItem('/dashclient/myships')
        break
      case 'addship':
        navigate('/dashclient/addship')
        setActiveNavItem('/dashclient/addship')
        break
      default:
        navigate('/dashclient/myships')
        setActiveNavItem('/dashclient/myships')
    }
  }

  return (
    <Box mt={2} style={{ position: 'sticky', top: 0, zIndex: 999 }}>
      <AppBar
        position="static"
        sx={{
          borderRadius: 2,
          backgroundColor: (theme) => alpha(theme.palette.error.main, 0.9),
          boxShadow: '6',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar
              src={atvyl}
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/loginfournisseur"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Atvyl
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                    <Typography
                      textAlign="center"
                      onClick={() => hundelNavItem(page)}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Avatar
              src={atvyl}
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Atvyl
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box>
              <Notification />
            </Box>{' '}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default NavbarFor
