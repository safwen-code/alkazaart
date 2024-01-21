import React from 'react'
import { Button, Modal, Box } from '@mui/material'
import AddShippModal from './ModalshippProcess/AddShippModal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%', // Set a percentage width for responsiveness
  maxWidth: 400, // Set a maximum width to avoid excessive stretching
  height: '90%', // Set a percentage height for responsiveness
  maxHeight: 600, // Set a maximum height to avoid excessive stretching
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

  // Responsive styling using theme breakpoints
  '@media (min-width:600px)': {
    width: 400,
  },
  '@media (min-height:600px)': {
    height: 600,
  },
}

const ModalShip = ({ idship, open, handleClose }) => {
  // console.log(idship, 'from modal ship')
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, overflow: 'auto' }}>
          <AddShippModal idship={idship} />
        </Box>
      </Modal>
    </div>
  )
}

export default ModalShip
