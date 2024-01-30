import React, { useState } from 'react'

import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import StarBorder from '@mui/icons-material/StarBorder'

const Notification = () => {
  //   const [open, setOpen] = useState(false)

  //   const handleClick = () => {
  //     setOpen(!open)
  //   }
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
