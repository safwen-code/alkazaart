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
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { listnotificationAdmin } from '../actions/userActions'

const Notification = () => {
  const [OpenNotif, setOpenNotif] = useState(null)
  const handleOpenNotifMenu = (event) => {
    setOpenNotif(event.currentTarget)
  }
  const handleCloseNotifMenu = () => {
    setOpenNotif(null)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listnotificationAdmin())
  }, [dispatch])
  const listnotification = useSelector((state) => state.listnotification)
  const { mynotification } = listnotification

  console.log(mynotification)
  return (
    <ListItem disablePadding>
      <IconButton aria-atomic onClick={handleOpenNotifMenu}>
        <Badge badgeContent={mynotification.length} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
      <Collapse in={OpenNotif} timeout="auto" unmountOnExit>
        <Menu
          anchorEl={OpenNotif}
          id="menu-appbar"
          sx={{
            mt: '45px',
          }}
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
          {mynotification.map((notif) => {
            return (
              <MenuItem onClick={handleCloseNotifMenu}>
                <Typography textAlign="center" key={notif.id}>
                  {notif.message}
                </Typography>
              </MenuItem>
            )
          })}
        </Menu>
      </Collapse>
    </ListItem>
  )
}

export default Notification
