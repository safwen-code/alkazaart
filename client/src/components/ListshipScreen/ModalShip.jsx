import React from 'react'
import { Button, Modal, Box, Typography } from '@mui/material'
import AddShipp from './AddShipp'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const ModalShip = ({ handleOpen, open, handleClose }) => {
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddShipp />
        </Box>
      </Modal>
    </div>
  )
}

export default ModalShip
