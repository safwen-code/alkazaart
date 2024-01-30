import React, { useState } from 'react'

import MailIcon from '@mui/icons-material/Mail'
import {
  IconButton,
  Badge,
  Collapse,
  ListItem,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'

const Notification = () => {
  const [OpenNotif, setOpenNotif] = useState(null)
  const handleOpenNotifMenu = (event) => {
    setOpenNotif(event.currentTarget)
  }
  const handleCloseNotifMenu = () => {
    setOpenNotif(null)
  }

  return (
    <ListItem disablePadding>
      <IconButton aria-atomic onClick={handleOpenNotifMenu}>
        <Badge badgeContent={10} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
      <Collapse in={OpenNotif} timeout="auto" unmountOnExit>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={OpenNotif}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(OpenNotif)}
          onClose={handleCloseNotifMenu}
        >
          {/* {settings.map((setting) => ( */}
          <MenuItem onClick={handleCloseNotifMenu}>
            <Typography textAlign="center">setting</Typography>
          </MenuItem>
          {/* ))} */}
        </Menu>
      </Collapse>
    </ListItem>
  )
}

export default Notification
