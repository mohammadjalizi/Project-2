import {  Fab, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

import React from 'react'

const Addpost = () => {
  return (
    <>       
    <Tooltip title="Add Post" sx={{position:"fixed",left:"22px",bottom:"22px"}}>   
    <Fab color="primary" aria-label="add">
    <AddIcon />
  </Fab>
  </Tooltip>
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

  </>
  )
}

export default Addpost